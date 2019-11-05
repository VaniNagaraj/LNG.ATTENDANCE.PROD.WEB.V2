import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";
import { showUpdate } from './data';
import { EmployeeService } from './services/employee.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { BranchService } from '../branch/service/branch.service';
import { ShiftService } from '../customer/shift/services/shift.service';
import { DepartmentService } from '../customer/department/services/department.service';
import { DesignationService } from '../customer/designation/services/designation.service';
import { ContractorService } from '../customer/contractor/services/contractor.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 10;

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

  globalBranch: any = [];

  globalShift: any = [];

  globalDepartment: any = [];

  globalDesignation: any = [];

  globalEmpType: any = [];
  showContractor: boolean = false;

  globalReportTo: any = [];

  globalWeeks = [
    { id: 1, name: 'Sunday' },
    { id: 2, name: 'Monday' },
    { id: 3, name: 'Tuesday' },
    { id: 4, name: 'Wednesday' },
    { id: 5, name: 'Thursday' },
    { id: 6, name: 'Friday' },
    { id: 7, name: 'Saturday' },
  ]

  globalContractor: any = [];

  deptForm: FormGroup;
  desgForm: FormGroup;
  shiftForm: FormGroup;
  weeklyoffForm: FormGroup;

  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    itemsShowLimit: 2,
    allowSearchFilter: false
  };
  showView: boolean = false;
  pageOfItems: any[];

  constructor(private fb: FormBuilder,
    private calendar: NgbCalendar,
    private router: Router,
    private route: ActivatedRoute,
    private dis: showUpdate,
    private empService: EmployeeService,
    private branchService: BranchService,
    private shiftService: ShiftService,
    private deptService: DepartmentService,
    private desgService: DesignationService,
    private contractService: ContractorService) { }

  ngOnInit() {

    this.dis.showList = true;

    this.empForm = this.fb.group({
      custId: [],
      empName: ['', Validators.required],
      empMobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      empGender: [null, Validators.required],
      empTypeId: [null, Validators.required],
      contractorId: [],
      empIsSupervisor_Manager: [false],
      empJoiningDate: ['', Validators.required],
    });

    this.branchForm = this.fb.group({
      brId: [null, Validators.required],
      employeeBranchFromDate: ['', Validators.required]
    });

    this.deptForm = this.fb.group({
      departmentId: [null, Validators.required],
      empReportingToId: [null, Validators.required],
      employeeDepartmentFromDate: ['', Validators.required]
    });

    this.desgForm = this.fb.group({
      designationId: [null, Validators.required],
      employeeDesignationFromDate: ['', Validators.required]
    });

    this.shiftForm = this.fb.group({
      shiftId: [null, Validators.required],
      employeeShiftFromDate: ['', Validators.required]
    });

    this.weeklyoffForm = this.fb.group({
      dayOfWeek: ['', Validators.required],
      empWeeklyOffDayFromDate: ['', Validators.required]
    });

    console.log(localStorage.getItem('currentUser'));
    this.globalReportTo = this.dis.getManagers();
    this.assignDate();
    this.getAllEmployee();
    this.getBranchAll();
    this.getShiftAll();
    this.getDeptartmentAll();
    this.getDesignationAll();
    this.getContractorAll();
    this.getEmpTypeAll();
  }

  assignDate() {
    this.empForm.patchValue({
      empJoiningDate: this.calendar.getToday()
    });

    this.branchForm.patchValue({
      employeeBranchFromDate: this.calendar.getToday()
    });

    this.deptForm.patchValue({
      employeeDepartmentFromDate: this.calendar.getToday()
    });

    this.shiftForm.patchValue({
      employeeShiftFromDate: this.calendar.getToday()
    });

    this.weeklyoffForm.patchValue({
      empWeeklyOffDayFromDate: this.calendar.getToday()
    });

    this.desgForm.patchValue({
      employeeDesignationFromDate: this.calendar.getToday()
    });

  }

  getAllEmployee() {
    this.empService.getAll()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Employees...', res.employyeList)
          this.globalEmployees = res.employyeList;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  getBranchAll() {
    this.branchService.getAll()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Branches...', res.data1)
          this.globalBranch = res.data1;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  getEmpTypeAll() {
    this.empService.getEmployeeType()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Employee Type...', res.employeeTypeDtoList)
          this.globalEmpType = res.employeeTypeDtoList;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  getShiftAll() {
    this.shiftService.get()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Shifts...', res.data1)
          this.globalShift = res.data1;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

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

  getDesignationAll() {
    this.desgService.get()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Designations...', res.data1)
          this.globalDesignation = res.data1;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  getContractorAll() {
    this.contractService.get()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Contracts...', res.data1)
          this.globalContractor = res.data1;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  get f() { return this.empForm.controls };
  get f1() { return this.branchForm.controls };
  get f2() { return this.deptForm.controls };
  get f3() { return this.desgForm.controls };
  get f4() { return this.shiftForm.controls };
  get f5() { return this.weeklyoffForm.controls };

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

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
    this.empForm.value.custId = 61;
    if (this.empForm.value.contractorId == null || this.empForm.value.contractorId == undefined) this.empForm.value.contractorId = 0;
    this.empForm.value.empJoiningDate = this.empForm.get('empJoiningDate').value.year + '-' +
      (this.empForm.get('empJoiningDate').value.month < 10 ? '0' + this.empForm.get('empJoiningDate').value.month : this.empForm.get('empJoiningDate').value.month) + '-' +
      (this.empForm.get('empJoiningDate').value.day < 10 ? '0' + this.empForm.get('empJoiningDate').value.day : this.empForm.get('empJoiningDate').value.day);

    console.log(this.empForm.value)
    this.submitted = false;
  }

  submitBranch() {
    this.submitted1 = true;
    if (this.branchForm.invalid) {
      return;
    }
    this.branchForm.value.employeeBranchFromDate = this.branchForm.get('employeeBranchFromDate').value.year + '-' +
      (this.branchForm.get('employeeBranchFromDate').value.month < 10 ? '0' + this.branchForm.get('employeeBranchFromDate').value.month : this.branchForm.get('employeeBranchFromDate').value.month) + '-' +
      (this.branchForm.get('employeeBranchFromDate').value.day < 10 ? '0' + this.branchForm.get('employeeBranchFromDate').value.day : this.branchForm.get('employeeBranchFromDate').value.day);
    console.log(this.branchForm.value)
    this.submitted1 = false;
  }

  submitDept() {
    this.submitted2 = true;
    if (this.deptForm.invalid) {
      return;
    }
    this.deptForm.value.employeeDepartmentFromDate = this.deptForm.get('employeeDepartmentFromDate').value.year + '-' +
      (this.deptForm.get('employeeDepartmentFromDate').value.month < 10 ? '0' + this.deptForm.get('employeeDepartmentFromDate').value.month : this.deptForm.get('employeeDepartmentFromDate').value.month) + '-' +
      (this.deptForm.get('employeeDepartmentFromDate').value.day < 10 ? '0' + this.deptForm.get('employeeDepartmentFromDate').value.day : this.deptForm.get('employeeDepartmentFromDate').value.day);
    console.log(this.deptForm.value)
    this.submitted2 = false;
  }

  submitDesg() {
    this.submitted3 = true;
    if (this.desgForm.invalid) {
      return;
    }
    this.desgForm.value.employeeDesignationFromDate = this.desgForm.get('employeeDesignationFromDate').value.year + '-' +
      (this.desgForm.get('employeeDesignationFromDate').value.month < 10 ? '0' + this.desgForm.get('employeeDesignationFromDate').value.month : this.desgForm.get('employeeDesignationFromDate').value.month) + '-' +
      (this.desgForm.get('employeeDesignationFromDate').value.day < 10 ? '0' + this.desgForm.get('employeeDesignationFromDate').value.day : this.desgForm.get('employeeDesignationFromDate').value.day);
    console.log(this.desgForm.value)
    this.submitted3 = false;
  }

  submitShift() {
    this.submitted4 = true;
    if (this.shiftForm.invalid) {
      return;
    }
    this.shiftForm.value.employeeShiftFromDate = this.shiftForm.get('employeeShiftFromDate').value.year + '-' +
      (this.shiftForm.get('employeeShiftFromDate').value.month < 10 ? '0' + this.shiftForm.get('employeeShiftFromDate').value.month : this.shiftForm.get('employeeShiftFromDate').value.month) + '-' +
      (this.shiftForm.get('employeeShiftFromDate').value.day < 10 ? '0' + this.shiftForm.get('employeeShiftFromDate').value.day : this.shiftForm.get('employeeShiftFromDate').value.day);
    console.log(this.shiftForm.value)
    this.submitted4 = false;
  }

  submitWeeklyOff() {
    this.submitted5 = true;
    if (this.weeklyoffForm.invalid) {
      console.log(this.f5.dayOfWeek.errors.required)
      return;
    }
    this.weeklyoffForm.value.empWeeklyOffDayFromDate = this.weeklyoffForm.get('empWeeklyOffDayFromDate').value.year + '-' +
      (this.weeklyoffForm.get('empWeeklyOffDayFromDate').value.month < 10 ? '0' + this.weeklyoffForm.get('empWeeklyOffDayFromDate').value.month : this.weeklyoffForm.get('empWeeklyOffDayFromDate').value.month) + '-' +
      (this.weeklyoffForm.get('empWeeklyOffDayFromDate').value.day < 10 ? '0' + this.weeklyoffForm.get('empWeeklyOffDayFromDate').value.day : this.weeklyoffForm.get('empWeeklyOffDayFromDate').value.day);
    let weekDays = '';
    //Combining all the selected weeks
    this.weeklyoffForm.value.dayOfWeek.forEach((element, index) => {
      console.log("index: ", index)
      if (index == 0) {
        weekDays = element.name;
      }
      else {
        weekDays = weekDays + ',' + element.name
      }
    });
    this.weeklyoffForm.value.dayOfWeek = weekDays;
    console.log("Selected weeks :", weekDays)
    console.log(this.weeklyoffForm.value)
    // Combining all the form values
    let resultEmployee = Object.assign(this.empForm.value, this.branchForm.value, this.desgForm.value, this.deptForm.value, this.shiftForm.value, this.weeklyoffForm.value)
    console.log("\n\nFinal Result: ", resultEmployee);

    this.empService.create(resultEmployee)
      .pipe(first())
      .subscribe(res => {
        console.log('response ', res);
        if (res.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
          this.closeWizard();
        } else {
          Swal.fire({
            type: 'success',
            showConfirmButton: true,
            title: res.status.message,
          });
          this.getAllEmployee();
          this.closeWizard();
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        this.closeWizard();
      });
  }

  closeWizard() {
    this.submitted = false;
    this.submitted1 = false;
    this.submitted2 = false;
    this.submitted3 = false;
    this.submitted4 = false;
    this.submitted5 = false;
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
    console.log(val)
    let selected = this.globalEmpType.filter((item) => item.empTypeId == val)
    if (selected[0].empType == 'Contractor') {
      this.showContractor = true;
    }
    else {
      this.showContractor = false;
      this.empForm.get('contractorId').reset();
    }
  }

  // Update
  editEmployee(id) {
    console.log('Edit')
    this.dis.showList = false;
    this.dis.showEdit = true;
    this.dis.setPersonal(id);
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
  deleteEmployee(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.empService.delete(id)
          .pipe(first())
          .subscribe((res) => {
            if (res.status.error) {
              Swal.fire({
                type: 'error',
                title: res.status.message,
              });
            } else {
              Swal.fire({
                type: 'success',
                title: res.status.message
              })
              this.getAllEmployee();
            }
          }, error => {
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          })

      }
    })
  }

}
