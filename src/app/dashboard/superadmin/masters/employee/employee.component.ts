import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";
import { showUpdate } from './data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

  globalEmployees: any = [];
  showForm: boolean = false;
  empForm: FormGroup;
  branchForm: FormGroup;
  submitted: boolean = false;
  submitted1: boolean = false;
  submitted2: boolean = false;
  submitted3: boolean = false;
  submitted4: boolean = false;
  submitted5: boolean = false;

  globalBranch = [
    { id: 1, name: 'Branch 1' },
    { id: 2, name: 'Branch 2' },
    { id: 3, name: 'Branch 3' },
  ]

  globalShift = [
    { id: 1, name: 'Day' },
    { id: 2, name: 'Night' },
  ]

  globalDepartment = [
    { id: 1, name: 'Dept 1' },
    { id: 2, name: 'Dept 2' },
  ]

  globalDesignation = [
    { id: 1, name: 'Desg 1' },
    { id: 2, name: 'Desg 2' },
  ]

  globalEmpType = [
    { id: 1, name: 'Employee' },
    { id: 2, name: 'Manager' },
    { id: 3, name: 'Contractor' },
  ]
  showContractor: boolean = false;

  globalReportTo = [
    { id: 1, name: 'Manager 1' },
    { id: 2, name: 'Manager 2' },
    { id: 3, name: 'Manager 3' },
  ]

  globalWeeks = [
    { id: 1, name: 'Sunday' },
    { id: 2, name: 'Monday' },
    { id: 3, name: 'Tuesday' },
    { id: 4, name: 'Wednesday' },
    { id: 5, name: 'Thursday' },
    { id: 6, name: 'Friday' },
    { id: 7, name: 'Saturday' },
  ]
  deptForm: FormGroup;
  desgForm: FormGroup;
  shiftForm: FormGroup;
  weeklyoffForm: FormGroup;

  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    itemsShowLimit: 3,
    allowSearchFilter: false
  };
  showView: boolean = false;

  constructor(private fb: FormBuilder, private calendar: NgbCalendar, private router: Router, private route: ActivatedRoute,
    private dis: showUpdate) { }

  ngOnInit() {

    this.dis.showList = true;
    this.globalEmployees = [
      {
        empName: 'ABC', empType: 'Employee', empDesg: 'SE', empDOJ: '2019-10-20', refBrId: 'XYZ', empDept: 'MNP', empMgr: 'ANS',
        empGender: 'Male', empMobile: '9874561230'
      }
    ]

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

    this.branchForm = this.fb.group({
      refBrId: [null, Validators.required],
      brFrom: ['', Validators.required]
    });

    this.deptForm = this.fb.group({
      empDept: [null, Validators.required],
      empReport: [null, Validators.required],
      deptFrom: ['', Validators.required]
    });

    this.desgForm = this.fb.group({
      empDesg: [null, Validators.required],
      desgFrom: ['', Validators.required]
    });

    this.shiftForm = this.fb.group({
      empShift: [null, Validators.required],
      shiftFrom: ['', Validators.required]
    });

    this.weeklyoffForm = this.fb.group({
      weekoff: ['', Validators.required],
      offFrom: ['', Validators.required]
    });

    this.assignDate();
    this.getAllEmployee();
  }

  assignDate() {
    this.empForm.patchValue({
      empDOJ: this.calendar.getToday()
    });

    this.branchForm.patchValue({
      brFrom: this.calendar.getToday()
    });

    this.deptForm.patchValue({
      deptFrom: this.calendar.getToday()
    });

    this.shiftForm.patchValue({
      shiftFrom: this.calendar.getToday()
    });

    this.weeklyoffForm.patchValue({
      offFrom: this.calendar.getToday()
    });

    this.desgForm.patchValue({
      desgFrom: this.calendar.getToday()
    });

  }

  getAllEmployee() {
    // this.branchService.getAll()
    //   .pipe(first())
    //   .subscribe(res => {
    //     if (res.status.error) {
    //       Swal.fire({
    //         type: 'error',
    //         title: res.status.message,
    //       });
    //     } else {
    //       console.log('Branches...', res.data1)
    //       this.globalBranch = res.data1;
    //     }
    //   }, error => {
    //     Swal.fire({
    //       type: 'error',
    //       title: 'Oops...',
    //       text: 'Something went wrong!',
    //     });
    //   });
  }

  get f() { return this.empForm.controls };
  get f1() { return this.branchForm.controls };
  get f2() { return this.deptForm.controls };
  get f3() { return this.desgForm.controls };
  get f4() { return this.shiftForm.controls };
  get f5() { return this.weeklyoffForm.controls };

  get isUpdate(): boolean {
    return this.dis.showEdit;
  }

  get isList(): boolean {
    return this.dis.showList;
  }

  openForm() {
    this.dis.showList = false;
    this.showForm = true;
  }

  onSubmit() {
    this.submitted = true;
    if (this.empForm.invalid) {
      return;
    }
    this.empForm.value.empDOJ = this.empForm.get('empDOJ').value.year + '-' + this.empForm.get('empDOJ').value.month + '-' + this.empForm.get('empDOJ').value.day;
    console.log(this.empForm.value)
    this.submitted = false;
  }

  submitBranch() {
    this.submitted1 = true;
    if (this.branchForm.invalid) {
      return;
    }
    this.branchForm.value.brFrom = this.branchForm.get('brFrom').value.year + '-' + this.branchForm.get('brFrom').value.month + '-' + this.branchForm.get('brFrom').value.day;
    console.log(this.branchForm.value)
    this.submitted1 = false;
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

  submitDesg() {
    this.submitted3 = true;
    if (this.desgForm.invalid) {
      return;
    }
    this.desgForm.value.desgFrom = this.desgForm.get('desgFrom').value.year + '-' + this.desgForm.get('desgFrom').value.month + '-' + this.desgForm.get('desgFrom').value.day;
    console.log(this.desgForm.value)
    this.submitted3 = false;
  }

  submitShift() {
    this.submitted4 = true;
    if (this.shiftForm.invalid) {
      return;
    }
    this.shiftForm.value.shiftFrom = this.shiftForm.get('shiftFrom').value.year + '-' + this.shiftForm.get('shiftFrom').value.month + '-' + this.shiftForm.get('shiftFrom').value.day;
    console.log(this.shiftForm.value)
    this.submitted4 = false;
  }

  submitWeeklyOff() {
    this.submitted5 = true;
    if (this.weeklyoffForm.invalid) {
      console.log(this.f5.weekoff.errors.required)
      return;
    }
    this.weeklyoffForm.value.offFrom = this.weeklyoffForm.get('offFrom').value.year + '-' + this.weeklyoffForm.get('offFrom').value.month + '-' + this.weeklyoffForm.get('offFrom').value.day;
    console.log(this.weeklyoffForm.value)
    this.submitted5 = false;
    this.showForm = false;
    this.dis.showList = true;
    this.showContractor = false;
    this.empForm.reset();
    this.branchForm.reset();
    this.deptForm.reset();
    this.desgForm.reset();
    this.shiftForm.reset();
    this.weeklyoffForm.reset();
    this.assignDate();
  }

  closeWizard() {
    this.showForm = false;
    this.dis.showList = true;
    this.submitted = false;
    this.showContractor = false;
    this.empForm.reset();
    this.branchForm.reset();
    this.deptForm.reset();
    this.desgForm.reset();
    this.shiftForm.reset();
    this.weeklyoffForm.reset();
    this.assignDate();
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

  // Update
  editEmployee(id) {
    console.log('Edit')
    this.dis.showList = false;
    this.dis.showEdit = true;
    this.dis.setPersonal(this.globalEmployees[0])
  }

  // View
  viewEmployee(id) {
    console.log('View')
    this.showView = true;
  }

  closeView() {
    this.showView = false;
  }

  // Delete
  deleteEmployee(id, name) {
    console.log('Delete')
  }

}
