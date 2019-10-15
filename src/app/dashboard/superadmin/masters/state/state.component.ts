import { State } from './model/state.model';
import { StateService } from './services/state.services';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  states: State;
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

  constructor(private fb: FormBuilder, private stateService: StateService) { }

  ngOnInit() {
    this.newState = this.fb.group({
      stateId: [''],
      refCountryId: [null, [Validators.required]],
      stateName: ['', [Validators.required, Validators.maxLength(25)]]
    });

    this.updateState = this.fb.group({
      stateId: [''],
      refCountryId: [null, [Validators.required]],
      stateName: ['', [Validators.required, Validators.maxLength(25)]]
    });

    this.getAllState();
  }

  get f() { return this.newState.controls }
  get f1() { return this.updateState.controls }

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
  }

  // Save new Form
  save() {
    console.log('save', this.newState.value);
    this.submitted = true;
    if (this.newState.invalid) {
      return;
    }
    this.showNew = false;
    this.stateService.createState(this.newState.value)
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
        this.getAllState();
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
      stateId: [this.states.stateId],
      stateName: [this.states.stateName],
      refCountryId: [this.states.refCountryId],
    });

    this.submitted1 = true;
    if (this.updateStateFormData.invalid) {
      return;
    }
    data.showUpdate = false;
    this.stateService.updateState(this.updateStateFormData.value)
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
    this.stateService.deleteState(data)
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
        this.getAllState();
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
