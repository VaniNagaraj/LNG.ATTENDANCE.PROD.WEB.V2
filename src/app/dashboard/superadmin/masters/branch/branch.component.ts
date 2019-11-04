import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BranchService } from './service/branch.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { CountryService } from '../country/services/country.services';
import { StateService } from '../state/services/state.services';
import { CustomerService } from '../customer/services/customer.services';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 10;

  branchForm: FormGroup;
  showForm = false;
  showList = true;
  globalCustomer: any;
  submitted: boolean = false;
  showView: boolean = false;

  globalBranch: any;
  pageOfItems: Array<any>;
  globalCountry: any;
  globalState: any;
  btnName: string;
  closeResult: string;
  branchView: any;
  endDate: { year: any; month: any; day: any; };

  constructor(private fb: FormBuilder,
    private branchService: BranchService,
    private countryService: CountryService,
    private stateService: StateService,
    private customerService: CustomerService,
    private modalService: NgbModal, ) { }

  ngOnInit() {
    this.branchForm = this.fb.group({
      brId: [],
      refCustomerId: [null, Validators.required],
      refCountryId: [null, Validators.required],
      refStateId: [null, Validators.required],
      brCity: ['', Validators.required],
      brName: ['', Validators.required],
      brAddress: ['', Validators.required],
      brPincode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      brCode: [''],
      brMobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      brLandline: ['', [Validators.pattern('[0-9]{10}')]],
      brEmail: ['', [Validators.required, Validators.email]],
      brLatLong: [],
      brValidityStart: [null, Validators.required],
      brValidityEnd: [null, Validators.required],
      brIsBillable: [true],
      brIsActive: [true]
    })

    this.getAllBranch();
    this.getAllCountry();
    this.getCustomerAll();
  }

  getAllBranch() {
    this.branchService.getAll()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Branches...', res.data1)
          this.globalBranch = res.data1;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  getAllCountry() {
    this.countryService.getAll()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Countries...', res.data1);
          this.globalCountry = res.data1;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  getCustomerAll() {
    this.customerService.getAllCustomers()
      .pipe(first())
      .subscribe(
        res => {
          if (res.status.error) {
            Swal.fire({
              type: 'error',
              title: res.status.message,
            });
          } else {
            this.globalCustomer = res.dataList;
            console.log(this.globalCustomer)
          }
        },
        error => {
          console.log('RESPONSE ERROR::====> ');
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        });
  }

  changeCountry(id) {
    this.stateService.getStateByCountry(id)
      .pipe(first())
      .subscribe(res => {
        console.log('response ', res);
        if (res.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          this.globalState = res.data1;
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

  get f() { return this.branchForm.controls };

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  openForm() {
    this.showForm = true;
    this.showList = false;
    this.btnName = "Save";
  }

  resetForm() {
    this.branchForm.reset();
    this.branchForm.patchValue({
      brIsActive: true,
      brIsBillable: true
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.branchForm.invalid) {
      return;
    }
    else {
      // Create form
      this.branchForm.value.brValidityStart = this.branchForm.get('brValidityStart').value.year + '-' +
        (this.branchForm.get('brValidityStart').value.month < 10 ? '0' + this.branchForm.get('brValidityStart').value.month : this.branchForm.get('brValidityStart').value.month) + '-' +
        (this.branchForm.get('brValidityStart').value.day < 10 ? '0' + this.branchForm.get('brValidityStart').value.day : this.branchForm.get('brValidityStart').value.day);
      this.branchForm.value.brValidityEnd = this.branchForm.get('brValidityEnd').value.year + '-' +
        (this.branchForm.get('brValidityEnd').value.month < 10 ? '0' + this.branchForm.get('brValidityEnd').value.month : this.branchForm.get('brValidityEnd').value.month) + '-' +
        (this.branchForm.get('brValidityEnd').value.day < 10 ? '0' + this.branchForm.get('brValidityEnd').value.day : this.branchForm.get('brValidityEnd').value.day);
      if (this.branchForm.value.brId == null || this.branchForm.value.brId == null) {
        this.branchService.create(this.branchForm.value)
          .pipe(first())
          .subscribe(res => {
            console.log('response ', res);
            if (res.error) {
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
              this.getAllBranch();
            }
          }, error => {
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          });
        console.log(this.branchForm.value)
      }
      // Update form
      else {
        this.branchService.update(this.branchForm.value)
          .pipe(first())
          .subscribe(res => {
            console.log('response ', res);
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
              this.getAllBranch();
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
    this.reset();
  }

  reset() {
    this.submitted = false;
    this.showForm = false;
    this.showList = true;
    this.globalState = [];
    this.resetForm();
  }

  viewBranch(id, content) {
    this.showView = true;
    this.branchView = this.globalBranch.filter((item) => item.brId == id)[0];
    this.branchService.getBranchById(id)
      .pipe(first())
      .subscribe((res) => {
        console.log('response ', res);
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('View....', res.data)
          this.branchView = res.data;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      })
    this.open(content)
  }

  closeView() {
    this.showView = false;
  }

  editBranch(id) {
    this.showForm = true;
    this.showList = false;
    this.btnName = "Update";

    this.branchService.getBranchById(id)
      .pipe(first())
      .subscribe((res) => {
        console.log('response ', res);
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Update....', res.data)
          this.changeCountry(res.data.refCountryId)
          res.data.brValidityStart = { year: +res.data.brValidityStart.slice(0, 4), month: +res.data.brValidityStart.slice(5, 7), day: +res.data.brValidityStart.slice(8, 10) }
          res.data.brValidityEnd = { year: +res.data.brValidityEnd.slice(0, 4), month: +res.data.brValidityEnd.slice(5, 7), day: +res.data.brValidityEnd.slice(8, 10) }
          this.branchForm.patchValue(res.data);
          // this.reset();
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      })
  }

  deleteBranch(id) {
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
        this.branchService.delete(id)
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
              this.getAllBranch();
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

  updateFilter(val) {
    console.log(val)
  }

  // Open default modal
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // This function is used in open
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // Open modal with dark section
  openModal(customContent) {
    this.modalService.open(customContent, { windowClass: 'cmodal', size: 'lg' });
  }

  // Open content with dark section
  openContent() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

  disableDate(date) {
    console.log("before", date);
    this.branchForm.get('brValidityEnd').reset();
    if (date != undefined || date != null) {
      this.endDate = {
        year: this.checkYear(date.year, date.month, date.day),
        month: this.checkMonth(date.month, date.day),
        day: this.checkDay(date.month, date.day)
      }
    }
    console.log("after", this.endDate)
  }

  checkYear(year, month, day) {
    if(month == 12 && day == 31) {
      return year + 1;
    }
    else {
      return year;
    }
  }

  checkMonth(month, day) {
      if((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) && day == 31) {
        return month + 1;
      }
      else if((month == 4 || month == 6 || month == 8 || month == 9 || month == 11) && day == 30) {
        return month + 1;
      }
      else if(month == 12 && day == 31) {
        return 1;
      }
      else if ((month == 2 && day == 28) || (month == 2 && day == 29)) {
        return month + 1;
      }
      else {
        return month;
      }
    }

    checkDay(month, day) {
      if((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day == 31) {
        return 1;
      }
      else if((month == 4 || month == 6 || month == 8 || month == 9 || month == 11) && day == 30) {
        return 1;
      }
      else if ((month == 2 && day == 28) || (month == 2 && day == 29)) {
        return 1;
      }
      else {
        return day + 1;
      }
    }

}
