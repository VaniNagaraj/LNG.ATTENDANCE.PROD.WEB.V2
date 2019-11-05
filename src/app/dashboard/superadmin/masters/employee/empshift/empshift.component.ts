import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { showUpdate } from '../data';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ShiftService } from '../../customer/shift/services/shift.service';

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

  constructor(private fb: FormBuilder, private dis: showUpdate,
    private shiftService: ShiftService) { }

  ngOnInit() {
    this.shiftForm = this.fb.group({
      shiftId: [null, Validators.required],
      shiftFrom: ['', Validators.required]
    });
  }

  get f4() { return this.shiftForm.controls };

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