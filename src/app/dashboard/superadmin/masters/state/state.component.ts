import { State } from './model/state.model';
import { StateService } from './services/state.services';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CountryService } from '../country/services/country.services';
import { Country } from '../country/model/country.model';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StateComponent implements OnInit {

  states: State;
  updateStateFormData: FormGroup;
  showNew = false;
  newState: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  updateState: FormGroup;
  countries: Country;

  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 10;
  pageOfItems: Array<any>;

  constructor(private fb: FormBuilder, private stateService: StateService, private countryService: CountryService) { }

  ngOnInit() {
    this.newState = this.fb.group({
      stateId: [],
      refCountryId: [null, [Validators.required]],
      stateName: ['', Validators.required]
    });

    this.updateState = this.fb.group({
      stateId: [],
      refCountryId: [null, [Validators.required]],
      stateName: ['', Validators.required]
    });

    this.getAllState();
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

  getAllState() {
    this.stateService.getAllStates()
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
          this.states = res.data1;
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
    this.newState.reset();
  }

  // Save new Form
  save() {
    this.submitted = true;
    if (this.newState.invalid) {
      return;
    }
    this.showNew = false;
    this.stateService.createState(this.newState.value)
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
          this.getAllState();
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
  editState(data) {
    data.showUpdate = true;
    this.stateService.getStateById(data.stateId)
      .pipe(first())
      .subscribe(res => {
        console.log('response ', res);
        if (res.status.error) {
          this.submitted = false;
          // this.spinnerService.hide();
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          this.updateState.patchValue(res.data);
          console.log('State update:', res.data);
        }
      }, error => {
        // this.spinnerService.hide();
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  // Update Data
  saveUpdate(data) {
    this.submitted1 = true;
    if (this.updateState.invalid) {
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
          this.stateService.updateState(this.updateState.value)
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
                this.getAllState();
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
      })
    }

  }

  // Cancel Data
  cancelUpdate(data) {
    this.submitted1 = false;
    data.showUpdate = false;
    this.updateState.reset();
  }

  // Delete Data
  deleteState(data) {
    console.log('delete...', data);
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
        this.stateService.deleteState(data.stateId)
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
              this.getAllState();
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
