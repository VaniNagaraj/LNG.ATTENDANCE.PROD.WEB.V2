import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { showUpdate } from '../data';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { DesignationService } from '../../customer/designation/services/designation.service';

@Component({
  selector: 'app-empdesignation',
  templateUrl: './empdesignation.component.html',
  styleUrls: ['./empdesignation.component.scss']
})
export class EmpDesignationComponent implements OnInit {

  submitted3: boolean = false;
  globalDesignation = [
    { id: 1, name: 'Desg 1' },
    { id: 2, name: 'Desg 2' },
  ]
  desgForm: FormGroup;

  constructor(private fb: FormBuilder, private dis: showUpdate,
    private desgService: DesignationService) { }

  ngOnInit() {
    this.desgForm = this.fb.group({
      designationId: [null, Validators.required],
      desgFrom: ['', Validators.required]
    });
  }

  get f3() { return this.desgForm.controls };

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

  submitDesg() {
    this.submitted3 = true;
    if (this.desgForm.invalid) {
      return;
    }
    this.desgForm.value.desgFrom = this.desgForm.get('desgFrom').value.year + '-' + this.desgForm.get('desgFrom').value.month + '-' + this.desgForm.get('desgFrom').value.day;
    console.log(this.desgForm.value)
    this.submitted3 = false;
  }

  close() {
    this.desgForm.reset();
    this.submitted3 = false;
    this.dis.showEdit = false;
    this.dis.showList = true;
  }

}