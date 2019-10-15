import { Shift } from './model/shift.model';
import { Branch } from './model/branch.model';
import { ShiftService } from './services/shift.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
// import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';


// enableRipple(true);
@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})

@Component({
  selector: 'app-root',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})

export class ShiftComponent implements OnInit {

  shift = [
    { slno: 1, brName: 'LNG Technologies', shiftName: 'General', shiftStart: '09:00', shiftEnd: '06:00' },
    { slno: 2, brName: 'IBM Blore', shiftName: 'Dayshift', shiftStart: '09:00', shiftEnd: '06:00' },
    { slno: 3, brName: 'HCL Chennai', shiftName: 'Nighshift', shiftStart: '02:00PM', shiftEnd: '11:00PM' },
    { slno: 4, brName: 'HP Pune', shiftName: 'Nighshift', shiftStart: '02:00PM', shiftEnd: '11:00PM' }
  ];

  shifts: any;

  shiftModel: Shift;

  globalShift = [
    { brId: 1, branchName: 'LNG Technologies' },
    { brId: 2, branchName: 'IBM Blore' },
    { brId: 3, branchName: 'HCL Chennai' },
    { brId: 4, branchName: 'HP Pune' }
  ];

  branches: Branch[];
  showNew = false;
  newShift: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  updateShift: FormGroup;
  branchName: string;

  p: Number = 1;
  count: Number = 2;

  public watermark = 'Select a time';
  // sets the format property to display the time value in 24 hours format.
  public formatString = 'HH:mm';
  public interval = 60;
  constructor(private fb: FormBuilder, private shiftService: ShiftService) { }

  ngOnInit() {
    this.newShift = this.fb.group({
      refBrId: ['', Validators.required],
      shiftName: ['', [Validators.required]],
      shiftStart: ['', [Validators.required]],
      shiftEnd: ['', [Validators.required]]
    });

    this.updateShift = this.fb.group({
      refBrId: ['', Validators.required],
      shiftName: ['', [Validators.required]],
      shiftStart: ['', [Validators.required]],
      shiftEnd: ['', [Validators.required]]
    });
    this.getAllShift();
    this.getAllBranch();
  }

  get f() { return this.newShift.controls }
  get f1() { return this.updateShift.controls }

  getAllShift() {
    this.shiftService.get()
        .pipe(first())
        .subscribe(res => {
          if (res.status.error) {
            this.submitted = false;
            Swal.fire({
              type: 'error',
              title: res.status.message,
            });
          } else {
            console.log('All Shift...', res)
            this.shifts = res.data1;
          }
        }, error => {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        });
  }

  getAllBranch() {
    this.shiftService.getAllBranch()
    .pipe(first())
    .subscribe(res => {
      if (res.status.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.status.message,
        });
      } else {
        console.log('Branches...', res)
        this.branches = res.data1;
      }
    }, error => {

    });
  }

  openForm() {
    this.showNew = true;
  }

  // Cancel New Form
  cancel() {
    this.showNew = false;
    this.submitted = false;
  }

  // Save new Form
  save() {
    this.submitted = true;
    console.log('save shift data', this.newShift.value);
    if (this.newShift.invalid) {
      return;
    }
    console.log('Shift Details Inserted Successfully!');
    this.showNew = false;
    this.shiftService.create(this.newShift.value)
    .pipe(first())
    .subscribe(res => {
      if (res.status.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.status.message,
        });
      } else {
        Swal.fire({
          type: 'success',
          showConfirmButton: true,
          title: res.status.message,
        });
        this.getAllShift();
        this.getAllBranch();
        // this.reset();
      }
    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }

  // Update Form open
  editShift(data) {
    data.showUpdate = true;
    this.updateShift.patchValue(data);
  }

  // Select Change Event
  selectchange(args) {
    this.branchName = args.target.value;
    this.branchName = args.target.options[args.target.selectedIndex].text;
    // console.log("Branch Name" )
  }

  // Update Data
  saveUpdate(data) {
    console.log('update....', data);
    this.submitted1 = true;
    if (this.updateShift.invalid) {
      return;
    }
    data.showUpdate = false;
  }

  // Cancel Data
  cancelUpdate(data) {
    this.submitted1 = false;
    data.showUpdate = false;
  }

  // Delete Data
  deleteShift(data) {

  }

}
