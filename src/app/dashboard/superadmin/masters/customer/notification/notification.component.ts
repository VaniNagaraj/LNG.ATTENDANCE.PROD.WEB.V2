import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  Branch = [
    { brId: '1', brCode: 'LNG001', brName: 'LNG Technologies', showUpdate: false },
    { brId: '2', brCode: 'LNG002', brName: 'LNG Technologies', showUpdate: false },
    { brId: '3', brCode: 'LNG003', brName: 'LNG Technologies', showUpdate: false },
    { brId: '4', brCode: 'LNG004', brName: 'LNG Technologies', showUpdate: false },
  ];


  checkList: any = []

  NotificationForm: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.NotificationForm = this.fb.group({
      brId: [null, Validators.required],
      notificationType: ['PUSH'],
      branchName: [''],
      notificationHeader: ['', [Validators.required, Validators.pattern("[A-Za-z0-9]{1,15}")]],
      notificationMessage: ['', [Validators.required, Validators.pattern("[A-Za-z0-9 ]{1,60}")]],

    });


  }


  get f() { return this.NotificationForm.controls }

  reset() {
    this.submitted = false;
    this.NotificationForm.reset();

  }
  onSubmit() {
    this.submitted = true;
    if (this.NotificationForm.invalid) {
      console.log(this.f.notificationHeader.errors)
      return;
    }
    this.checkList.forEach((element, i) => {
      if(i == 0) {
        this.NotificationForm.value.branchName = element;
      }
      else {
        this.NotificationForm.value.branchName = this.NotificationForm.value.branchName +' '+element;
      }
      
    });
    console.log(this.NotificationForm.value)
  }

  getValues(bool, val) {
    if(bool == true) {
      if(this.checkList.filter((item) => item != val)) {
        this.checkList.push(val);
      }
    }
    else {
      if(this.checkList.filter((item) => item == val)) {
        let index = this.checkList.indexOf(val)
        this.checkList.splice(index, 1)
      }
      else {
        this.checkList.push(val);
      }
    }
    console.log(this.checkList)
  }
}
