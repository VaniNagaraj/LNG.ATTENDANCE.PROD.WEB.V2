import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { showUpdate } from '../data';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ContractorService } from '../../customer/contractor/services/contractor.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  empForm: FormGroup;
  submitted: boolean = false;
  globalEmpType = [
    { id: 1, name: 'Employee' },
    { id: 2, name: 'Manager' },
    { id: 3, name: 'Contractor' },
  ]
  globalContractor = [
    { id: 1, name: 'Contractor 1' },
    { id: 2, name: 'Contractor 2' },
    { id: 3, name: 'Contractor 3' },
    { id: 4, name: 'Contractor 4' },
  ]
  showContractor: boolean = false;

  constructor(private fb: FormBuilder, private dis: showUpdate,
    private contractService: ContractorService,
    private empService: EmployeeService) { }

  ngOnInit() {
    this.empForm = this.fb.group({
      empId: [],
      empName: ['', Validators.required],
      empMobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      empGender: [null, Validators.required],
      empTypeId: [null, Validators.required],
      contractorId: [],
      empMgr: [false],
      empJoiningDate: ['', Validators.required],
      mgrService: [true]
    });

    this.getContractorAll();
    this.setValues();
  }

  setValues() {
    this.empService.getEmployeeById(this.dis.empId)
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('patching data...', res.data)
          res.data.empJoiningDate = {
            year: +res.data.empJoiningDate.slice(0, 4), month: +res.data.empJoiningDate.slice(5, 7), day: +res.data.empJoiningDate.slice(8, 10)
          }
          this.empForm.patchValue(res.data);
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  get f() { return this.empForm.controls };

  getContractorAll() {
    this.contractService.get()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Contracts...', res.data1)
          this.globalContractor = res.data1;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.empForm.invalid) {
      return;
    }

    this.empForm.value.empJoiningDate = this.empForm.get('empJoiningDate').value.year + '-' +
      (this.empForm.get('empJoiningDate').value.month < 10 ? '0' + this.empForm.get('empJoiningDate').value.month : this.empForm.get('empJoiningDate').value.month) + '-' +
      (this.empForm.get('empJoiningDate').value.day < 10 ? '0' + this.empForm.get('empJoiningDate').value.day : this.empForm.get('empJoiningDate').value.day);
    console.log(this.empForm.value)
    this.submitted = false;
  }

  close() {
    this.empForm.reset();
    this.submitted = false;
    this.showContractor = false;
    this.dis.showEdit = false;
    this.dis.showList = true;
  }

  selectedEmpType(val) {
    console.log(val)
    let selected = this.globalEmpType.filter((item) => item.id == val)
    if (selected[0].name == 'Contractor') {
      this.showContractor = true;
    }
    else {
      this.showContractor = false;
      this.empForm.get('contractorId').reset();
    }
  }

}
