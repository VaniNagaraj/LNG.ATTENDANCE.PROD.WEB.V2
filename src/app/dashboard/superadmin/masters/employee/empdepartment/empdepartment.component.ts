import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { showUpdate } from '../data';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { DepartmentService } from '../../customer/department/services/department.service';

@Component({
  selector: 'app-empdepartment',
  templateUrl: './empdepartment.component.html',
  styleUrls: ['./empdepartment.component.scss']
})
export class EmpDepartmentComponent implements OnInit {

  deptForm: FormGroup;
  submitted2: boolean = false;
  globalDepartment = [
    { id: 1, name: 'Dept 1' },
    { id: 2, name: 'Dept 2' },
  ];
  globalReportTo = [
    { id: 1, name: 'Manager 1' },
    { id: 2, name: 'Manager 2' },
    { id: 3, name: 'Manager 3' },
  ];

  constructor(private fb: FormBuilder, private dis: showUpdate,
    private deptService: DepartmentService) { }

  ngOnInit() {
    this.deptForm = this.fb.group({
      departmentId: [null, Validators.required],
      empReportingToId: [null, Validators.required],
      deptFrom: ['', Validators.required]
    });
  }

  get f2() { return this.deptForm.controls };

  getDeptartmentAll() {
    this.deptService.get()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Departments...', res.data1)
          this.globalDepartment = res.data1;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  submitDept() {
    this.submitted2 = true;
    if (this.deptForm.invalid) {
      return;
    }
    this.deptForm.value.deptFrom = this.deptForm.get('deptFrom').value.year + '-' + this.deptForm.get('deptFrom').value.month + '-' + this.deptForm.get('deptFrom').value.day;
    console.log(this.deptForm.value)
    this.submitted2 = false;
  }

  close() {
    this.deptForm.reset();
    this.submitted2 = false;
    this.dis.showEdit = false;
    this.dis.showList = true;
  }

}
