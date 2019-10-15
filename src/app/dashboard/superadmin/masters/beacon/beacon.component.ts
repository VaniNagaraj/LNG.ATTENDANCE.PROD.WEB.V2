import { BeaconService } from './services/beacon.service';
import { Beacon } from './model/beacon.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from 'app/shared/confirmation-dialog/confirmation-dialog.service';


@Component({
  selector: 'app-beacon',
  templateUrl: './beacon.component.html',
  styleUrls: ['./beacon.component.scss']
})

export class BeaconComponent implements OnInit {

  beacons: Beacon;
  updateBeaconFormData: FormGroup;

  showNew = false;
  newBeacon: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  updateBeacon: FormGroup;

  constructor(private fb: FormBuilder, private beaconService: BeaconService, private confirmationDialogService: ConfirmationDialogService
) { }

  ngOnInit() {
    this.newBeacon = this.fb.group({
      beaconId: [''],
      beaconCode: [null, [Validators.required]],
    });

    this.updateBeacon = this.fb.group({
      beaconId: [''],
      beaconCode: [null, [Validators.required]],
    });

    this.getAllBeacon();
  }

  get f() { return this.newBeacon.controls }
  get f1() { return this.updateBeacon.controls }

  getAllBeacon() {
    this.beaconService.get()
    .pipe(first())
    .subscribe(res => {
      if (res.status.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.status.message,
        });
      } else {
        console.log('beacons...', res.data)
        this.beacons = res.beaconDtoList;
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
    console.log('save', this.newBeacon.value);
    this.submitted = true;
    if (this.newBeacon.invalid) {
      return;
    }
    this.showNew = false;
    this.beaconService.create(this.newBeacon.value)
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
        this.getAllBeacon();
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
    this.updateBeacon.patchValue(data);
  }

  // Update Data
  saveUpdate(data) {
    this.updateBeaconFormData = this.fb.group({
      beaconId: [this.beacons.beaconId],
      beaconCode: [this.beacons.beaconCode],
    });

    console.log('update...', this.updateBeaconFormData.value);

    this.submitted1 = true;
    if (this.updateBeaconFormData.invalid) {
      return;
    }
    data.showUpdate = false;
    this.beaconService.update(this.updateBeaconFormData.value)
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
        this.getAllBeacon();
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

  public openConfirmationDialog(dt: any) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete ... ?')
    .then((confirmed) => {
      if (confirmed) {
        this.deleteCustomer(dt);
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  // Delete Data
  deleteCustomer(data) {
    console.log('delete...', data);
    this.beaconService.delete(data)
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
        this.getAllBeacon();
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
