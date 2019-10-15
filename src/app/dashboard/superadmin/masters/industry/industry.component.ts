import { Industry } from './model/industry.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IndustryService } from './services/industry.service';


@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  industries: Industry;


  showNew = false;
  newIndustry: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  updateIndustry: FormGroup;
  updateIndustryFormData: FormGroup;

  constructor(private fb: FormBuilder, private industryService: IndustryService) { }

  ngOnInit() {
    this.newIndustry = this.fb.group({
      industryId: [''],
      industryName: ['', [Validators.required, Validators.maxLength(20)]]
    });

    this.updateIndustry = this.fb.group({
      industryId: [''],
      industryName: ['', [Validators.required, Validators.maxLength(20)]]
    });

    this.getAllIndustry();
  }

  get f() { return this.newIndustry.controls }
  get f1() { return this.updateIndustry.controls }

  getAllIndustry() {
    this.industryService.get()
    .pipe(first())
    .subscribe(res => {
      if (res.status.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.status.message,
        });
      } else {
        console.log('industry...', res)
        this.industries = res.industryTypeDtoList;
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
    console.log('save', this.newIndustry.value);
    this.submitted = true;
    if (this.newIndustry.invalid) {
      return;
    }
    this.showNew = false;
    this.industryService.create(this.newIndustry.value)
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
        this.getAllIndustry();
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
    this.updateIndustry.patchValue(data);
  }

  // Update Data
  saveUpdate(data) {
    this.updateIndustryFormData = this.fb.group({
      industryId: [this.industries.industryId],
      industryName: [this.industries.industryName]
    });
    this.submitted1 = true;
    if (this.updateIndustryFormData.invalid) {
      return;
    }
    data.showUpdate = false;
    this.industryService.update(this.updateIndustryFormData.value)
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
        this.getAllIndustry();
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
    this.industryService.delete(data)
    .pipe(first())
    .subscribe(res => {
      console.log('delete response', res);
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
        // this.reset();
        this.getAllIndustry();
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
