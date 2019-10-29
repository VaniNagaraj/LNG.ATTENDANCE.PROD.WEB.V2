import { Component, OnInit, Output, EventEmitter, Input,ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-custLeaveType',
  templateUrl: './custLeaveType.component.html',
  styleUrls: ['./custLeaveType.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustLeaveTypeComponent implements OnInit {

  leaveType=[
    { refCustId: '1', custLeaveName: 'Sick Leave',showUpdate:false},
    { refCustId: '2', custLeaveName: 'Casual Leave',showUpdate:false},
    { refCustId: '3', custLeaveName: 'Earned Leave',showUpdate:false},
    { refCustId: '4', custLeaveName: 'Maternity Leave',showUpdate:false},
    { refCustId: '5', custLeaveName: 'Paternity Leave',showUpdate:false}

  ];

  showNew = false;
  newLeaveType: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  updateCustLeaveType: FormGroup;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 10;
  pageOfItems: Array<any>;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.newLeaveType = this.fb.group({
      refCustId: [''],
      custLeaveName: [null, Validators.required]
    });

    this.updateCustLeaveType = this.fb.group({
      refCustId: [''],
      custLeaveName: [null, Validators.required],
      showUpdate:['']
    });
  }

  get f() { return this.newLeaveType.controls }
  get f1() { return this.updateCustLeaveType.controls }

  openForm() {
    for (let dataItem of this.pageOfItems) {
      if (dataItem.showUpdate != undefined) {
        dataItem.showUpdate = false;
      }
    }
    this.showNew = true;
  }
  save() {
    this.submitted = true;
    if (this.newLeaveType.invalid) {
      return;
    }
    this.showNew = false;
  }
  editCustLeaveType(data) {
    this.showNew = false;
    for (let c of this.leaveType) {
      if (c.showUpdate != undefined) {
        c.showUpdate = false;
      }
    }
    data.showUpdate = true;
    console.log(data);
    this.updateCustLeaveType.setValue(data);
  }
  saveUpdate(data) {
    console.log(data);
    this.submitted1 = true;
    if (this.updateCustLeaveType.invalid) {
      return;
    }
    console.log(data);
    console.log(this.updateCustLeaveType.value);
    console.log(this.leaveType);
    data.showUpdate = false;
    this.submitted1 = false;
  }
  cancelUpdate(data) {
    this.submitted1 = false;
    data.showUpdate = false;
  }

  // Delete Data
  deleteCustLeaveType(data) {

  }
  cancel() {
    this.showNew = false;
    this.submitted = false;
    this.newLeaveType.reset();
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }


}
