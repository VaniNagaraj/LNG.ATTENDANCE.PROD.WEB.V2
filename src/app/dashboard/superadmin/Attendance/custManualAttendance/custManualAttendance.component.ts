import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-custManualAttendance',
  templateUrl: './custManualAttendance.component.html',
  styleUrls: ['./custManualAttendance.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustManualAttendanceComponent implements OnInit {

  Department = [
    { deptId: '1', deptName: 'IT-service'},
    { deptId: '2', deptName: 'Development'},
    { deptId: '3', deptName: 'Finance'},
    { deptId: '4', deptName: 'Human Resource'},
  ];

  custAttendance=[
    {empName:'Praveen',shiftStart:'9:00AM',attnedanceStatus:'0'},
    {empName:'Karthik',shiftStart:'2:00PM',attnedanceStatus:'1'},
    {empName:'Seema',shiftStart:'11:00PM',attnedanceStatus:'1'},
    {empName:'Neetu',shiftStart:'9:00AM',attnedanceStatus:'0'},
  ];
  
  showNew = false;
  submitted = false;
  submitted1 = false;
  // showUpdate = false;
  SelectForm=true;
  

  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 10;
  pageOfItems: Array<any>;
  custAttendanceForm: FormGroup;
  empAttendForm: FormGroup;
  ViewAttndForm: any;
  attnedanceStatus: any;
  isDisabled: boolean;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.custAttendanceForm=this.fb.group({
      deptId: [null, Validators.required],
      dateOfAttendance:['',Validators.required],
      empName:['',Validators.required],
      shiftStart:['',Validators.required],
      attnedanceStatus:['',Validators.required]
    });
  }

  openForm() {
    this.custAttendance =  this.custAttendance.filter(function(empAttendance) {
      return empAttendance.attnedanceStatus == '0';
    });
    this.isDisabled = true;
  }

  cancel() { 
    this.submitted=false;
    this.custAttendanceForm.reset();
    this.isDisabled=false;
  }

  save() {
  
   
  }

   onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  

}
