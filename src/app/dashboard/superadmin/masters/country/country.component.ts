import { CountryService } from './services/country.services';
import { Country } from './model/country.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
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
  newCountry: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  updateCountry: FormGroup;

  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 10;
  pageOfItems: Array<any>;

  constructor(private fb: FormBuilder, private countryService: CountryService) { }

  ngOnInit() {
    this.newCountry = this.fb.group({
      countryId: [''],
      countryTelCode: [null, [Validators.required, Validators.pattern("[+]{1}[0-9]{1,5}")]],
      countryName: ['', [Validators.required]]
    });

    this.updateCountry = this.fb.group({
      countryId: [''],
      countryTelCode: [null, [Validators.required, Validators.pattern("[+]{1}[0-9]{1,5}")]],
      countryName: ['', [Validators.required]]
    });

    this.getAllCountry();
  }

  get f() { return this.newCountry.controls }
  get f1() { return this.updateCountry.controls }

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
          console.log('Countries...', res.data1)
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
    this.newCountry.reset();
  }

  // Save new Form
  save() {
    console.log('save', this.newCountry.value);
    this.submitted = true;
    if (this.newCountry.invalid) {
      return;
    }
    this.showNew = false;
    this.countryService.create(this.newCountry.value)
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
          this.getAllCountry();
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
    this.cancel();
  }

  // Update Form open
  editCountry(data) {
    data.showUpdate = true;
    this.updateCountry.patchValue(data);
  }

  // Update Data
  saveUpdate(data) {
    this.submitted1 = true;
    if (this.updateCountry.invalid) {
      return;
    }
    else {
      Swal.fire({
        title: 'Are you sure?',
        // text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Update!'
      }).then((result) => {
        if (result.value) {
          this.countryService.update(this.updateCountry.value)
            .pipe(first())
            .subscribe(res => {
              if (res.error) {
                this.submitted = false;
                Swal.fire({
                  type: 'error',
                  title: res.message,
                });
                this.cancelUpdate(data);
              } else {
                Swal.fire({
                  type: 'success',
                  showConfirmButton: true,
                  title: res.message,
                });
                this.getAllCountry();
                this.cancelUpdate(data);
              }
            }, error => {
              Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              });
              this.cancelUpdate(data);
            });
        }
      })
    }
  }

  // Cancel Data
  cancelUpdate(data) {
    this.submitted1 = false;
    data.showUpdate = false;
    this.updateCountry.reset();
  }

  // Delete Data
  deleteCountry(data) {
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
        this.countryService.delete(data)
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
              this.getAllCountry();
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



  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
