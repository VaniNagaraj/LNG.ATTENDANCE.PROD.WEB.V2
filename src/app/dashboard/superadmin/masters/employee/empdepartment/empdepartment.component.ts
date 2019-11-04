import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { showUpdate } from '../data';

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

  constructor(private fb: FormBuilder, private dis: showUpdate) { }

  ngOnInit() {
    this.deptForm = this.fb.group({
      empDept: [null, Validators.required],
      empReport: [null, Validators.required],
      deptFrom: ['', Validators.required]
    });
  }

  get f2() { return this.deptForm.controls };

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
