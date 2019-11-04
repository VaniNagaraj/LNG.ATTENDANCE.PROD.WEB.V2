import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { showUpdate } from '../data';

@Component({
  selector: 'app-weeklyoff',
  templateUrl: './weeklyoff.component.html',
  styleUrls: ['./weeklyoff.component.scss']
})
export class WeeklyoffComponent implements OnInit {

  submitted5: boolean = false;
  weeklyoffForm: FormGroup;
    globalWeeks = [
    { id: 1, name: 'Sunday' },
    { id: 2, name: 'Monday' },
    { id: 3, name: 'Tuesday' },
    { id: 4, name: 'Wednesday' },
    { id: 5, name: 'Thursday' },
    { id: 6, name: 'Friday' },
    { id: 7, name: 'Saturday' },
  ]

  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    itemsShowLimit: 3,
    allowSearchFilter: false
  };
  
  constructor(private fb: FormBuilder, private dis: showUpdate) { }

  ngOnInit() {
    this.weeklyoffForm = this.fb.group({
      weekoff: ['', Validators.required],
      offFrom: ['', Validators.required]
    });
  }

  get f5() { return this.weeklyoffForm.controls };

  submitWeeklyOff() {
    this.submitted5 = true;
    if (this.weeklyoffForm.invalid) {
      console.log(this.f5.weekoff.errors.required)
      return;
    }
    this.weeklyoffForm.value.offFrom = this.weeklyoffForm.get('offFrom').value.year + '-' + this.weeklyoffForm.get('offFrom').value.month + '-' + this.weeklyoffForm.get('offFrom').value.day;
    console.log(this.weeklyoffForm.value)
    this.submitted5 = false;
  }

  close() {
    this.weeklyoffForm.reset();
    this.submitted5 = false;
    this.dis.showEdit = false;
    this.dis.showList = true;
  }

}