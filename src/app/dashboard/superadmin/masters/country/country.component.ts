import { CountryService } from './services/country.services';
import { Country } from './model/country.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})

export class CountryComponent implements OnInit {

  countries: Country;
  updateStateFormData: FormGroup;

  globalCountry = [
    { counytryId: 1, counytryName: 'India' },
    { counytryId: 2, counytryName: 'USA' }
  ]
  showNew = false;
  newState: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  updateState: FormGroup;

  constructor(private fb: FormBuilder, private countryService: CountryService) { }

  ngOnInit() {
    this.newState = this.fb.group({
      countryId: [''],
      countryTelCode: [null, [Validators.required]],
      countryName: ['', [Validators.required, Validators.maxLength(25)]]
    });

    this.updateState = this.fb.group({
      countryId: [''],
      countryTelCode: [null, [Validators.required]],
      countryName: ['', [Validators.required, Validators.maxLength(25)]]
    });

    this.getAllCountry();
  }

  get f() { return this.newState.controls }
  get f1() { return this.updateState.controls }

  getAllCountry() {
    this.countryService.getAll()
    .pipe(first())
    .subscribe(res => {
      if (res.status.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.status.message,
        });
      } else {
        console.log('states...', res.data1)
        this.countries = res.data1;
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
    console.log('save', this.newState.value);
    this.submitted = true;
    if (this.newState.invalid) {
      return;
    }
    this.showNew = false;
    this.countryService.create(this.newState.value)
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
        this.getAllCountry();
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
    this.updateState.patchValue(data);
  }

  // Update Data
  saveUpdate(data) {
    this.updateStateFormData = this.fb.group({
      countryId: [this.countries.countryId],
      countryName: [this.countries.countryName],
      countryTelCode: [this.countries.countryTelCode],
    });

    console.log('update...', this.updateStateFormData.value);

    this.submitted1 = true;
    if (this.updateStateFormData.invalid) {
      return;
    }
    data.showUpdate = false;
    this.countryService.update(this.updateStateFormData.value)
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
        this.getAllCountry();
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
    this.countryService.delete(data)
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
        this.getAllCountry();
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
