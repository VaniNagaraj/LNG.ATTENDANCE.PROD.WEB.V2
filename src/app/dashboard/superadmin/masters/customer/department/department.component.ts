import { Department } from './model/department.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentService } from './services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departments: Department;

  showNew = false;
  newDepartment: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  updateDepartment: FormGroup;
  updateDepartmentFormData: FormGroup;
  custId: number;

  constructor(private fb: FormBuilder, private departmentService: DepartmentService) { }

  ngOnInit() {
    const currUser = JSON.parse(localStorage.getItem('currentUser'));
    this.custId = currUser.refCustId;
    console.log('cust id', this.custId);

    this.newDepartment = this.fb.group({
      deptId: [''],
      refCustId: [''],
      deptName: ['', [Validators.required, Validators.maxLength(20)]]
    });

    this.updateDepartment = this.fb.group({
      deptId: [''],
      refCustId: [''],
      deptName: ['', [Validators.required, Validators.maxLength(20)]]
    });

    this.getAllDepartment();
  }

  get f() { return this.newDepartment.controls }
  get f1() { return this.updateDepartment.controls }

  getAllDepartment() {
    this.departmentService.get()
    .pipe(first())
    .subscribe(res => {
      if (res.status.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.status.message,
        });
      } else {
        console.log('Department...', res)
        this.departments = res.data1;
      }
    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }

  // New Form open
  openForm() {
    this.showNew = true;
  }

  // Cancel New Form
  cancel() {
    this.showNew = false;
    this.submitted = false;
  }

  // Save new Form
  save() {
    this.newDepartment.patchValue({refCustId: this.custId});
    console.log('save', this.newDepartment.value);
    this.submitted = true;
    if (this.newDepartment.invalid) {
      return;
    }
    this.showNew = false;
    this.departmentService.create(this.newDepartment.value)
    .pipe(first())
    .subscribe(res => {
      if (res.status.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.status.message,
        });
      } else {
        Swal.fire({
          type: 'success',
          showConfirmButton: true,
          title: res.status.message,
        });
        this.getAllDepartment();
        // this.reset();
      }
    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }

  // Update Form open
  editCustomer(data) {
    data.showUpdate = true;
    this.updateDepartment.patchValue(data);
  }

  // Update Data
  saveUpdate(data) {
    this.updateDepartmentFormData = this.fb.group({
      deptId: [this.departments.deptId],
      refCustId: [this.custId],
      deptName: [this.departments.deptName]
    });
    console.log('update...', this.updateDepartmentFormData.value);
    this.submitted1 = true;
    if (this.updateDepartmentFormData.invalid) {
      return;
    }
    data.showUpdate = false;
    this.departmentService.update(this.updateDepartmentFormData.value)
    .pipe(first())
    .subscribe(res => {
      if (res.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.message,
        });
      } else {
        Swal.fire({
          type: 'success',
          showConfirmButton: true,
          title: res.message,
        });
        this.getAllDepartment();
        // this.reset();
      }
    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }

  // Cancel Data
  cancelUpdate(data) {
    this.submitted1 = false;
    data.showUpdate = false;
  }

  // Delete Data
  deleteCustomer(data) {
    console.log('delete...', data);
    this.departmentService.delete(data)
    .pipe(first())
    .subscribe(res => {
      console.log('delete response', res);
      if (res.status.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.status.message,
        });
      } else {
        Swal.fire({
          type: 'success',
          showConfirmButton: true,
          title: res.status.message,
        });
        // this.reset();
        this.getAllDepartment();
      }
    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }

}
