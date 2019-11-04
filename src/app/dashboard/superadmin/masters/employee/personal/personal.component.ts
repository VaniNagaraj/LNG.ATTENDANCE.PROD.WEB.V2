import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { showUpdate } from '../data';

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
  showContractor: boolean = false;

  constructor(private fb: FormBuilder, private dis: showUpdate) { }

  ngOnInit() {
    this.empForm = this.fb.group({
      empName: ['', Validators.required],
      empMobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      empGender: [null, Validators.required],
      empType: [null, Validators.required],
      empCont: [],
      empMgr: [false],
      empDOJ: ['', Validators.required],
      mgrService: [true]
    });

    this.setValues();
  }

  setValues() {
    let val = this.dis.getPersonal()
    let date = val.empDOJ.toString()

    this.empForm.patchValue(val);
    this.empForm.patchValue({
      empDOJ: { year: +date.slice(0,4), month: +date.slice(5,7), day: +date.slice(8,10)}
    });
  }

  get f() { return this.empForm.controls };

  onSubmit() {
    this.submitted = true;
    if (this.empForm.invalid) {
      return;
    }
    console.log(this.empForm.value.empDOJ)
    this.empForm.value.empDOJ = this.empForm.get('empDOJ').value.year + '-' + this.empForm.get('empDOJ').value.month + '-' + this.empForm.get('empDOJ').value.day;
    // console.log(this.empForm.value)
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
    if (val == 'Contractor') {
      this.showContractor = true;
      // this.empForm.get('empCont').reset();
    }
    else {
      this.showContractor = false;
      this.empForm.get('empCont').reset();
    }
  }

}
