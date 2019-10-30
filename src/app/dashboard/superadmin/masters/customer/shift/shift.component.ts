import { Shift } from './model/shift.model';
import { Branch } from './model/branch.model';
import { ShiftService } from './services/shift.service';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
// import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';


// enableRipple(true);
@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ShiftComponent implements OnInit {

  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 10;

  shifts: any;
  branches: Branch[];
  showNew = false;
  newShift: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  updateShift: FormGroup;

  public watermark = 'Select a time';
  // sets the format property to display the time value in 24 hours format.
  public formatString = 'HH:mm';
  public interval = 60;
  pageOfItems: any[];

  constructor(private fb: FormBuilder, private shiftService: ShiftService) { }

  ngOnInit() {
    this.newShift = this.fb.group({
      refBrId: [null, Validators.required],
      shiftName: ['', [Validators.required]],
      shiftStart: ['', [Validators.required]],
      shiftEnd: ['', [Validators.required]]
    });

    this.updateShift = this.fb.group({
      shiftId: [],
      refBrId: [null, Validators.required],
      shiftName: ['', [Validators.required]],
      shiftStart: ['', [Validators.required]],
      shiftEnd: ['', [Validators.required]]
    });
    this.getAllShift();
    this.getAllBranch();
  }

  get f() { return this.newShift.controls }
  get f1() { return this.updateShift.controls }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

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
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  openForm() {
    this.showNew = true;
  }

  // Cancel New Form
  cancel() {
    this.showNew = false;
    this.submitted = false;
    this.newShift.reset()
  }

  // Save new Form
  save() {
    this.submitted = true;
    console.log('save shift data', this.newShift.value);
    if (this.newShift.invalid) {
      return;
    }
    console.log('Shift Details Inserted Successfully!');
    this.shiftService.create(this.newShift.value)
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
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
          this.cancel();
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

  // Update Data
  saveUpdate(data) {
    console.log('update....', data);
    this.submitted1 = true;
    if (this.updateShift.invalid) {
      return;
    }
    this.shiftService.update(this.updateShift.value)
      .pipe(first())
      .subscribe(res => {
        if (res.error) {
          Swal.fire({
            type: 'error',
            title: res.message,
          });
        } else {
          Swal.fire({
            type: 'success',
            showConfirmButton: true,
            title: res.message,
          });
          this.getAllShift();
          this.cancelUpdate(data);
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  // Cancel Data
  cancelUpdate(data) {
    this.submitted1 = false;
    data.showUpdate = false;
    this.updateShift.reset();
  }

  // Delete Data
  deleteShift(data) {
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
        this.shiftService.delete(data.shiftId)
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
              this.getAllShift();
            }
          }, error => {
            console.log(error)
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
