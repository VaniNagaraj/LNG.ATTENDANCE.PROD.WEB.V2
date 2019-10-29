import { CountryService } from './services/country.services';
import { Country } from './model/country.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})

export class CountryComponent implements OnInit {
  source: LocalDataSource;
  filterSource: LocalDataSource;
  alertSource: LocalDataSource;
  countries: Country;
  updateStateFormData: FormGroup;

  showList = true;
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

  settings = {
    actions: {
      add: true,
      editable: true,
      position: 'right'
    },
    columns: {
      countryId: {
        title: 'SL No',
        show: false,
      },
      countryTelCode: {
        title: 'Tel Code',
        filter: false,
      },
      countryName: {
        title: 'Country',
        filter: false,
      }
    },
    attr: {
      class: 'table table-responsive'
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline">Add new</i>',
      createButtonContent: '<i class="ft-check font-medium-3 mr-2"></i>',
      cancelButtonContent: '<i class="ft-x font-medium-3 mr-2"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
    },
  };

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

  // And the listener code which asks the DataSource to filter the data:
  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to inclue in the search
      {
        field: 'countryTelCode',
        search: query,
      },
      {
        field: 'countryName',
        search: query,
      },
    ], false);
    if (query === '') {
      this.getAllCountry();
    }
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

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
          this.source = new LocalDataSource(res.data1);
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

  //  For confirm action On Delete
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  //  For confirm action On Save
  onSaveConfirm(event) {
    console.log('save......', event.newData);
    // if (window.confirm('Are you sure you want to save?')) {
    //   event.newData['name'] += ' + added in code';
    //   event.confirm.resolve(event.newData);
    // } else {
    //   event.confirm.reject();
    // }
  }

  //  For confirm action On Create
  onCreateConfirm(event) {
    console.log('create......', event.newData);

    this.submitted = true;
    this.newCountry.setValue(event.newData);
    console.log(this.newCountry);
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
          event.confirm.resolve(event.newData);
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
    // if (window.confirm('Are you sure you want to create?')) {
    //   event.newData['name'] += ' + added in code';
    //   event.confirm.resolve(event.newData);
    // } else {
    //   event.confirm.reject();
    // }
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
