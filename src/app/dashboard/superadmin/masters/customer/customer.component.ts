import { Industry } from './../industry/model/industry.model';
import { IndustryService } from './../industry/services/industry.service';
import { Customer } from './model/customer.model';
import { StateService } from './../state/services/state.services';
import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder, ValidatorFn, ValidationErrors, } from '@angular/forms';
import { CustomerService } from './services/customer.services';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CountryService } from '../country/services/country.services';
import { Country } from '../country/model/country.model';
import { State } from '../state/model/state.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ConfirmationDialogService } from 'app/shared/confirmation-dialog/confirmation-dialog.service';
import { LocalDataSource } from 'ng2-smart-table';
import { validateCompanyName } from 'app/shared/common/common';


export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  source: LocalDataSource;
  filterSource: LocalDataSource;
  alertSource: LocalDataSource;
  incorrectCE = false;

  countries: Country[];
  industries: Industry[];
  states: State[];
  customerForm: FormGroup;
  submitCustFormData: FormGroup;
  submitted = false;
  cID: number;
  showList = true;
  showForm = false;
  submitBtn = true;

  customers: any;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 10;

  custView: Customer;
  formInfo: string;
  filestring: string;
  files: any;
  sellersPermitFile: File;

  pageOfItems: Array<any>;
  closeResult: string;
  custCodeDisabled = false;
  submitType: String;
  startDate;
  today;
  template = '<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif">';

  settings = {
    mode: 'external',
    hideSubHeader: true,
    actions: {
      custom: [{ name: 'view', title: `<i class="ft-eye font-medium-3 mr-2"></i>` }],
      add: false,
      editable: false,
      position: 'right'
    },
    columns: {
      custId: {
        title: 'SL No',
        show: false,
      },
      custName: {
        title: 'Customer',
        filter: false,
      },
      custCode: {
        title: 'Code',
        filter: false,
      },
      custCity: {
        title: 'City',
        filter: false,
      },
      countryName: {
        title: 'Country',
        filter: false,
      },
      stateName: {
        title: 'State',
        filter: false,
      },
      custEmail: {
        title: 'Email',
        filter: false,
      },
      industryName: {
        title: 'Industry',
        filter: false,
      },
      custNoOfBranch: {
        title: 'Branches(#)',
        filter: false,
      }
    },
    attr: {
      class: 'table table-responsive'
    },
    edit: {
      editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
    },
  };


  // And the listener code which asks the DataSource to filter the data:
  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to inclue in the search
      {
        field: 'custName',
        search: query,
      },
      {
        field: 'custCode',
        search: query,
      },
      {
        field: 'custCity',
        search: query,
      },
      {
        field: 'countryName',
        search: query,
      },
      {
        field: 'stateName',
        search: query,
      },
      {
        field: 'custEmail',
        search: query,
      },
      {
        field: 'industryName',
        search: query,
      },
      {
        field: 'custNoOfBranch',
        search: query,
      },
    ], false);
    if (query === '') {
      this.getCustomerAll();
    }
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }


  // tslint:disable-next-line: max-line-length
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private modalService: NgbModal,
    private countryService: CountryService,
    private stateService: StateService,
    private spinnerService: Ng4LoadingSpinnerService,
    private confirmationDialogService: ConfirmationDialogService,
    private industryService: IndustryService
  ) {
    this.submitBtn = true;
  }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      custId: [null],
      custName: ['', [Validators.required, Validators.pattern('[a-zA-Z\\. ]+[a-zA-Z ]$')]],
      // tslint:disable-next-line: max-line-length
      custCode: ['', [Validators.required, Validators.pattern('^([A-Za-z]{3})+?([0-9]{3})?'), Validators.minLength(3), Validators.maxLength(6)]],
      // tslint:disable-next-line: max-line-length
      custAddress: ['', [Validators.required]],
      custCity: ['', [Validators.required, Validators.minLength(1)]],
      refCountryId: [null, [Validators.required, Validators.minLength(1)]],
      refStateId: [null, [Validators.required, Validators.minLength(1)]],
      custPincode: ['', [Validators.required, Validators.pattern('[0-9]{6}'), Validators.minLength(1)]],
      custGSTIN: ['', [Validators.required, Validators.pattern('[0-9A-Z]{15,20}'), Validators.minLength(15)]],
      custMobile: ['', [Validators.required, Validators.pattern('[0-9]{10}'), Validators.minLength(1)]],
      custLandline: [null],
      custEmail: ['', [Validators.required, Validators.email, Validators.minLength(1)]],
      refIndustryTypeId: [null, [Validators.required, Validators.minLength(1)]],
      custValidityStart: ['', [Validators.required, Validators.minLength(1)]],
      custValidityEnd: ['', [Validators.required, Validators.minLength(1)]],
      custNoOfBranch: ['1', [Validators.required, Validators.pattern('[0-9]{1,2}'), Validators.minLength(1)]],
      custLogoFile: [null]
    }, {validators: this.checkDateValidation});
    this.getAllCountry();
    this.getCustomerAll();
    this.getAllIndustry();
  }

  checkName() {
     if (validateCompanyName(this.customers.custName)) {
       this.submitted = true;
     } else {
       this.submitted = false;
     }
  }

  checkDateValidation: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    try {

      let startingDatefield = control.get('custValidityStart').value;

      this.startDate = new Date(startingDatefield); //new Date(startingDatefield).getDate()
      let endingDatefield = control.get('custValidityEnd').value;

      if (this.today >= startingDatefield) { //compare to current date 
        console.log("Please set a Start Date that is on or after Current Date and Time.");
        return { 'effectiveStartDatetime': false };

      } else
        if (startingDatefield > endingDatefield && endingDatefield) {
          this.customerForm.controls['custValidityEnd'].setErrors({'incorrect': true});
          console.log("Please set an End Date and Time that is after the Start Date and Time.");
          this.incorrectCE = true;
          return { 'incorrectCE' : true };
        } else {
          return {};
        }
    } catch (err) {
    }
  };

  getAllIndustry() {
    this.spinnerService.show();
    this.industryService.get()
    .pipe(first())
    .subscribe(res => {
        if (res.status.error) {
          this.submitted = false;
          this.spinnerService.hide();
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          this.spinnerService.hide();
          this.industries = res.industryTypeDtoList;
        }
    }, error => {
        this.spinnerService.hide();
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
    });
  }

  getAllCountry() {
    this.spinnerService.show();
    this.countryService.getAll()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          this.submitted = false;
          this.spinnerService.hide();
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('states...', res.data);
          this.spinnerService.hide();
          this.countries = res.data1;
        }
      }, error => {
        this.spinnerService.hide();
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  showState(event) {
    console.log('country on change', event.target.value);
    this.spinnerService.show();
    this.stateService.getStateByCountry(event.target.value)
      .pipe(first())
      .subscribe(res => {
        console.log('response ', res);
        if (res.status.error) {
          this.submitted = false;
          this.spinnerService.hide();
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          this.spinnerService.hide();
          this.states = res.data1;
          // this.reset();
        }
      }, error => {
        this.spinnerService.hide();
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  showStateById(Id) {
    console.log('country on change', Id);
    this.spinnerService.show();
    this.stateService.getStateByCountry(Id)
      .pipe(first())
      .subscribe(res => {
        console.log('response ', res);
        if (res.status.error) {
          this.submitted = false;
          this.spinnerService.hide();
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          this.spinnerService.hide();
          this.states = res.data1;
          // this.reset();
        }
      }, error => {
        this.spinnerService.hide();
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
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

  getCustomerAll() {
    this.spinnerService.show();
    this.customerService.getAllCustomers()
      .pipe(first())
      .subscribe(
        res => {
          if (res.status.error) {
            this.spinnerService.hide();
            Swal.fire({
              type: 'error',
              title: res.status.message,
            });
          } else {
            this.spinnerService.hide();
            this.customers = res.dataList;
            this.source = new LocalDataSource(res.dataList);
          }
        },
        error => {
          console.log('RESPONSE ERROR::====> ');
          this.spinnerService.hide();
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  get f() { return this.customerForm.controls; }

  onSelectFile(event): any {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.sellersPermitFile = file;
      this.handleInputChange(file); //turn into base64
    } else {
      alert("No file selected");
    }
  }

  handleInputChange(files) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    // this.imageSrc = base64result;
    this.sellersPermitFile = base64result;
    console.log(this.sellersPermitFile);
  }

  onSubmit() {
    console.log('submittttttt', this.submitType);
    if (this.submitType === 'save') {
      this.save();
    } else {
      this.updateCustomer();
    }
  }

  save() {
    this.submitted = true;
    this.files = this.f.custLogoFile.value;
    this.submitCustFormData = this.formBuilder.group({
      custId: [null],
      custName: [this.f.custName.value],
      custCode: [this.f.custCode.value],
      custAddress: [this.f.custAddress.value],
      custCity: [this.f.custCity.value],
      refCountryId: [Number(this.f.refCountryId.value)],
      refStateId: [Number(this.f.refStateId.value)],
      custPincode: [this.f.custPincode.value],
      custGSTIN: [this.f.custGSTIN.value],
      custMobile: [this.f.custMobile.value],
      custLandline: [this.f.custLandline.value],
      custEmail: [this.f.custEmail.value],
      refIndustryTypeId: [Number(this.f.refIndustryTypeId.value)],
      custValidityStart: [this.f.custValidityStart.value],
      custValidityEnd: [this.f.custValidityEnd.value],
      custNoOfBranch: [this.f.custNoOfBranch.value],
      custLogoFile: [this.sellersPermitFile]
    });

    console.log('customer data', this.submitCustFormData.value);
    //   // console.log(this.f.custMobile.errors);
    //   // stop here if form is invalid
    if (this.customerForm.invalid) {
      return;
    }

    this.spinnerService.show();
    this.customerService.saveCustomer(this.submitCustFormData.value)
      .pipe(first())
      .subscribe(res => {
        console.log('response ', res);
        if (res.error) {
          this.submitted = false;
          this.spinnerService.hide();
          Swal.fire({
            type: 'error',
            title: res.message,
          });
        } else {
          this.spinnerService.hide();
          Swal.fire({
            type: 'success',
            showConfirmButton: true,
            title: res.message,
          });
          this.reset();
        }
      }, error => {
        this.spinnerService.hide();
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  viewCustomer(event, content: any) {
    console.log('view...', event.data.custId);
    this.spinnerService.show();
    this.customerService.getCustomerById(event.data.custId)
      .pipe(first())
      .subscribe((res => {
        this.spinnerService.hide();
        this.open(content)
        console.log('view modal...', res);
        // res.data.custValidityStart = res.data.custValidityStart.slice(0, 10);
        // res.data.custValidityEnd = res.data.custValidityEnd.slice(0, 10);
        this.custView = res.data;
      }));
  }

  updateCustomer() {
    console.log('Update customer...');
    this.submitted = true;
    this.files = this.f.custLogoFile.value;

    this.submitCustFormData = this.formBuilder.group({
      custId: [this.f.custId.value],
      custName: [this.f.custName.value],
      custCode: [this.f.custCode.value],
      custAddress: [this.f.custAddress.value],
      custCity: [this.f.custCity.value],
      refCountryId: [Number(this.f.refCountryId.value)],
      refStateId: [Number(this.f.refStateId.value)],
      custPincode: [this.f.custPincode.value],
      custGSTIN: [this.f.custGSTIN.value],
      custMobile: [this.f.custMobile.value],
      custLandline: [this.f.custLandline.value],
      custEmail: [this.f.custEmail.value],
      refIndustryTypeId: [Number(this.f.refIndustryTypeId.value)],
      custValidityStart: [this.f.custValidityStart.value],
      custValidityEnd: [this.f.custValidityEnd.value],
      custNoOfBranch: [this.f.custNoOfBranch.value],
      custLogoFile: [this.sellersPermitFile]
    });

    console.log('update data', this.submitCustFormData.value);

    if (this.customerForm.invalid) {
      return;
    }

    this.spinnerService.show();
    this.customerService.updateCustomers(this.submitCustFormData.value)
      .pipe(first())
      .subscribe(res => {
        console.log('response ', res);
        if (res.status.error) {
          this.submitted = false;
          this.spinnerService.hide();
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          this.spinnerService.hide();
          Swal.fire({
            type: 'success',
            showConfirmButton: true,
            title: res.status.message,
          });
          this.reset();
        }
      }, error => {
        this.spinnerService.hide();
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  reset() {
    this.submitted = false;
    this.customerForm.reset();
    this.showList = true;
    this.showForm = false;
    this.getCustomerAll();
  }

  openForm() {
    this.showList = false;
    this.showForm = true;
    this.formInfo = 'Create';
    this.submitBtn = true;
    this.custCodeDisabled = false;
  }

  editCustomer(event) {
    console.log('edit...', event.data);
    console.log('id...', event.data.custId);
    this.showForm = true;
    this.showList = false;
    this.submitBtn = false;
    this.spinnerService.show();
    this.customerService.getCustomerById(event.data.custId)
      .pipe(first())
      .subscribe((res => {
        console.log('edit...', res);
        this.customers = 0;
        this.custCodeDisabled = true;
        this.spinnerService.hide();
        this.showStateById(res.data.refCountryId);
        res.data.custValidityStart = res.data.custValidityStart.slice(0, 10);
        res.data.custValidityEnd = res.data.custValidityEnd.slice(0, 10);
        this.customers = res.data;
      }));
  }

  public openConfirmationDialog(event) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.deleteCustomer(event.data.custId);
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  deleteCustomer(custId: any) {
    this.spinnerService.show();
    this.customerService.deleteCustomer(custId)
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          this.submitted = false;
          this.spinnerService.hide();
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          this.spinnerService.hide();
          Swal.fire({
            type: 'success',
            showConfirmButton: true,
            title: res.status.message,
          });
          this.reset();
        }
      }, error => {
        this.spinnerService.hide();
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  checkDate() {
    console.log('Chnaged');
  }

}
