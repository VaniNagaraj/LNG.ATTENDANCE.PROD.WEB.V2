import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-holidayCalendar',
  templateUrl: './holidayCalendar.component.html',
  styleUrls: ['./holidayCalendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HolidayCalendarComponent implements OnInit {
  Branch = [
    { brId: '1', brCode: 'LNG001', brName: 'LNG Technologies' },
    { brId: '2', brCode: 'LNG002', brName: 'LNG Technologies' },
    { brId: '3', brCode: 'LNG003', brName: 'LNG Technologies' },
    { brId: '4', brCode: 'LNG004', brName: 'LNG Technologies'},
  ];
  Holiday = [
    { holidayCalendarYear: '2019', holidayDate: '15-08-2019', holidayName: 'Indepenedance Day', showUpdate: false },
    {  holidayCalendarYear: '2019', holidayDate: '26-01-2019', holidayName: 'Republic Day', showUpdate: false },
    {  holidayCalendarYear: '2019', holidayDate: '02-10-2019', holidayName: 'Gandhi Jayanti Day', showUpdate: false },
    {  holidayCalendarYear: '2019', holidayDate: '01-11-2019', holidayName: 'Karnataka Rajyostava', showUpdate: false },
  ];

  updateHolidayFormData: FormGroup;
  showNew = false;
  newHoliday: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  SelectForm=true;
  updateHoliday: FormGroup;

  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 10;
  pageOfItems: Array<any>;
  HolidayCalenderForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.HolidayCalenderForm=this.fb.group({
      selectCompanyBranch: [null, Validators.required],
      brId: [null, Validators.required]
    });
    this.newHoliday = this.fb.group({
      selectCompanyBranch: [null, Validators.required],
      brId: [null, Validators.required],
      holidayCalendarYear: ['',Validators.required],
      holidayDate:['',Validators.required],
      holidayName:['',[Validators.required,Validators.pattern("[A-Za-z ]{0,25}")]]
    });

    this.updateHoliday = this.fb.group({
      holidayCalendarYear: ['',[Validators.required, Validators.pattern("[0-9]{4}")]],
      holidayDate:['',Validators.required],
      holidayName:['',[Validators.required,Validators.pattern("[A-Za-z ]{0,25}")]],
      showUpdate:[],
    });

  }
  get f() { return this.newHoliday.controls }
  get f1() { return this.updateHoliday.controls }

  openForm() {
    for (let dataItem of this.pageOfItems) {
      if (dataItem.showUpdate != undefined) {
        dataItem.showUpdate = false;
      }
    }
    this.showNew = true;
  }

  cancel() {
    this.showNew = false;
    this.submitted = false;
    this.newHoliday.reset();
  }

  save() {
    this.submitted = true;
    if (this.newHoliday.invalid) {
      return;
    }
    this.showNew = false;
  }

   //Edit Form open
   editHoliday(data) {
    this.showNew = false;
    for (let c of this.Holiday) {
      if (c.showUpdate != undefined) {
        c.showUpdate = false;
      }
    }
    data.showUpdate = true;
    console.log(data);
    this.updateHoliday.setValue(data);
  }

  // Update Data
  saveUpdate(data) {
    console.log(data);
    this.submitted1 = true;
    if (this.updateHoliday.invalid) {
      return;
    }
    console.log(data);
    console.log(this.updateHoliday.value);
    console.log(this.Holiday);
    data.showUpdate = false;
    this.submitted1 = false;
  }

  // Cancel Data
  cancelUpdate(data) {
    this.submitted1 = false;
    data.showUpdate = false;
  }

  // Delete Data
  deleteHoliday(data) {

  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
