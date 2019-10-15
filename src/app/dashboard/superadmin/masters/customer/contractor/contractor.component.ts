import { Contractor } from './model/contractor.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ContractorService } from './services/contractor.service';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent implements OnInit {

  contractors: Contractor

  showNew = false;
  newContractor: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  updateContractor: FormGroup;
  updateContractorFormData: FormGroup;
  custId: number;


  constructor(private fb: FormBuilder, private contractorService: ContractorService) { }

  ngOnInit() {
    const currUser = JSON.parse(localStorage.getItem('currentUser'));
    this.custId = currUser.refCustId;
    console.log('cust id', this.custId);
    this.newContractor = this.fb.group({
      contractorId: [''],
      refCustId: [''],
      contractorName: ['', [Validators.required, Validators.maxLength(20)]]
    });

    this.updateContractor = this.fb.group({
      contractorId: [''],
      refCustId: [''],
      contractorName: ['', [Validators.required, Validators.maxLength(20)]]
    });

    this.getAllContractor();
  }

  get f() { return this.newContractor.controls }
  get f1() { return this.updateContractor.controls }

  getAllContractor() {
    this.contractorService.get()
    .pipe(first())
    .subscribe(res => {
      if (res.status.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.status.message,
        });
      } else {
        console.log('contractor...', res)
        this.contractors = res.data1;
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
    this.newContractor.patchValue({refCustId: this.custId});
    console.log('save', this.newContractor.value);
    this.submitted = true;
    if (this.newContractor.invalid) {
      return;
    }
    this.showNew = false;
    this.contractorService.create(this.newContractor.value)
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
        this.getAllContractor();
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
    this.updateContractor.patchValue(data);
  }

  // Update Data
  saveUpdate(data) {
    this.updateContractorFormData = this.fb.group({
      contractorId: [this.contractors.contractorId],
      refCustId: [this.custId],
      contractorName: [this.contractors.contractorName]
    });
    this.submitted1 = true;
    if (this.updateContractorFormData.invalid) {
      return;
    }
    data.showUpdate = false;
    this.contractorService.update(this.updateContractorFormData.value)
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
        this.getAllContractor();
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
    this.contractorService.delete(data)
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
        this.getAllContractor();
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
