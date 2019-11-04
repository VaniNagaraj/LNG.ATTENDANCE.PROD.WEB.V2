import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { showUpdate } from '../data';

@Component({
  selector: 'app-empshift',
  templateUrl: './empshift.component.html',
  styleUrls: ['./empshift.component.scss']
})
export class EmpShiftComponent implements OnInit {

  submitted4: boolean = false;
  shiftForm: FormGroup;
  globalShift = [
    { id: 1, name: 'Day' },
    { id: 2, name: 'Night' },
  ]

  constructor(private fb: FormBuilder, private dis: showUpdate) { }

  ngOnInit() {
    this.shiftForm = this.fb.group({
      empShift: [null, Validators.required],
      shiftFrom: ['', Validators.required]
    });
  }

  get f4() { return this.shiftForm.controls };

  submitShift() {
    this.submitted4 = true;
    if (this.shiftForm.invalid) {
      return;
    }
    this.shiftForm.value.shiftFrom = this.shiftForm.get('shiftFrom').value.year + '-' + this.shiftForm.get('shiftFrom').value.month + '-' + this.shiftForm.get('shiftFrom').value.day;
    console.log(this.shiftForm.value)
    this.submitted4 = false;
  }

  close() {
    this.shiftForm.reset();
    this.submitted4 = false;
    this.dis.showEdit = false;
    this.dis.showList = true;
  }

}