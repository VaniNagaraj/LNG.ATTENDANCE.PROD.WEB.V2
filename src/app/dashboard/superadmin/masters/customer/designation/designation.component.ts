import { Designation } from './model/designation.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DesignationService } from './services/designation.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {

  designations: Designation;

  showNew = false;
  newDesignation: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  updateDesignation: FormGroup;
  updateDesignationFormData: FormGroup;
  custId: number;

  constructor(private fb: FormBuilder, private designationService: DesignationService) { }

  ngOnInit() {
    const currUser = JSON.parse(localStorage.getItem('currentUser'));
    this.custId = currUser.refCustId;
    console.log('cust id', this.custId);

    this.newDesignation = this.fb.group({
      designationId: [''],
      refCustId: [''],
      designationName: ['', [Validators.required, Validators.maxLength(20)]]
    });

    this.updateDesignation = this.fb.group({
      designationId: [''],
      refCustId: [''],
      designationName: ['', [Validators.required, Validators.maxLength(20)]]
    });

    if (this.custId === 0) {
      this.getAllDesignation();
    } else {
      this.getAllDesignationByCustId();
    }
  }

  get f() { return this.newDesignation.controls }
  get f1() { return this.updateDesignation.controls }

  getAllDesignation() {
    this.designationService.get()
    .pipe(first())
    .subscribe(res => {
      if (res.status.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.status.message,
        });
      } else {
        console.log('Designation...', res)
        this.designations = res.data1;
      }
    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }

  getAllDesignationByCustId() {
    this.designationService.getByCustId(this.custId)
    .pipe(first())
    .subscribe(res => {
      if (res.status.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.status.message,
        });
      } else {
        console.log('Designation...', res)
        this.designations = res.data1;
      }
    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }

  // New Form open
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
    this.newDesignation.patchValue({refCustId: this.custId});
    console.log('save', this.newDesignation.value);
    this.submitted = true;
    if (this.newDesignation.invalid) {
      return;
    }
    this.showNew = false;
    this.designationService.create(this.newDesignation.value)
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
        this.getAllDesignation();
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
  editCustomer(data) {
    data.showUpdate = true;
    this.updateDesignation.patchValue(data);
  }

  // Update Data
  saveUpdate(data) {
    this.updateDesignationFormData = this.fb.group({
      designationId: [this.designations.designationId],
      refCustId: [this.custId],
      designationName: [this.designations.designationName]
    });
    console.log('update...', this.updateDesignationFormData.value);
    this.submitted1 = true;
    if (this.updateDesignationFormData.invalid) {
      return;
    }
    data.showUpdate = false;
    this.designationService.update(this.updateDesignationFormData.value)
    .pipe(first())
    .subscribe(res => {
      if (res.error) {
        this.submitted = false;
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
        this.getAllDesignation();
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

  // Cancel Data
  cancelUpdate(data) {
    this.submitted1 = false;
    data.showUpdate = false;
  }

  // Delete Data
  deleteCustomer(data) {
    console.log('delete...', data);
    this.designationService.delete(data)
    .pipe(first())
    .subscribe(res => {
      console.log('delete response', res);
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
        // this.reset();
        this.getAllDesignation();
      }
    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }

}
