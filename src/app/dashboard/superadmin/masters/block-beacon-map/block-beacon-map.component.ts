import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Number } from 'core-js';
import { BeaconmapService } from './services/beaconmap.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { BlockService } from '../block/services/block.service';
import { CustomerService } from '../customer/services/customer.services';
import { BranchService } from '../branch/service/branch.service';

@Component({
  selector: 'app-block-beacon-map',
  templateUrl: './block-beacon-map.component.html',
  styleUrls: ['./block-beacon-map.component.scss']
})
export class BlockBeaconMapComponent implements OnInit {

  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 10;

  blockbeaconMap: any = [];

  globalBlock: any = [];

  showForm: boolean = false;
  newBlockBeaconMap: FormGroup;
  submitted = false;

  pageOfItems: any[];
  custId: any;
  showList: boolean = true;
  formInfo: string;
  custName: any;
  btnName: string;
  globalBranch: any;
  globalCustomers: any;

  // Beacons selection
  templField = [
    { key: 'Name', name: 'Name (ID)' },
    { key: 'Email', name: 'E-Mail' },
    { key: 'Address', name: 'Address' },
    { key: 'Street', name: 'Street' },
    { key: 'City', name: 'City' },
    { key: 'State', name: 'State' },
    { key: 'PostalCode', name: 'Postal Code' },
    { key: 'Country', name: 'Country' },
    { key: 'Latitude', name: 'Latitude' },
    { key: 'Longitude', name: 'Longitude' },
    { key: 'Phone', name: 'Phone Number' },
    { key: 'MobilePhone', name: 'Mobile Number' },
    { key: 'Username', name: 'Username' },
    { key: 'csupervisor', name: 'Manager' },
    { key: 'csphone', name: 'Manager Contact' },
    { key: 'status', name: 'Status' },
    { key: 'usertype', name: 'Role' },
    { key: 'drvinglicense', name: 'Driving Licence' },
    { key: 'drvinglicexpiry', name: 'Licence Expiry Date' },
    { key: 'accid', name: 'Company' },
    { key: 'refname', name: 'Referer' },
    { key: 'deptname', name: 'Department' },
    { key: 'bloodgroup', name: 'Blood Group' },
    { key: 'dob', name: 'Date of Birth' },
    { key: 'doj', name: 'Date of Joining' },
    { key: 'advamt', name: 'Advance Amount' },
    { key: 'salaryamt', name: 'Salary' },
    { key: 'exitdate', name: 'Exit Date' },
    { key: 'exitreason', name: 'Exit Reason' },
    { key: 'exitcomments', name: 'Exit Comment' },
    { key: 'experience', name: 'Experience' },
    { key: 'esino', name: 'ESI Number' },
    { key: 'pfno', name: 'PF Number' },
    { key: 'AadharCard', name: 'Aadhaar Card Number' },
    { key: 'PanCard', name: 'PAN Card Number' }
  ];

  fieldlist = JSON.parse(JSON.stringify(this.templField));
  leftFieldName: any = [];
  rightFieldName: any = [];
  fields: any = [];

  constructor(private formBuilder: FormBuilder,
    private beaconMapService: BeaconmapService,
    private blockService: BlockService,
    private custService: CustomerService,
    private branchService: BranchService) {
  }

  ngOnInit() {
    const currUser = JSON.parse(localStorage.getItem('currentUser'));
    this.custId = currUser.refCustId;
    console.log("Current user ID....", this.custId)

    this.newBlockBeaconMap = this.formBuilder.group({
      blkBeaconMapId: [],
      // blkLogicalName: ['', Validators.required],
      refCustId: [],
      refBlkId: [null, Validators.required],
      refBranchId: [null, Validators.required],
      // beaconCode: ['', Validators.required],
      // beaconType: [null, Validators.required]
    });

    this.getBeaconMapAll();
    this.getBranchAll(this.custId);
    this.getCustomer();
  }

  get f() { return this.newBlockBeaconMap.controls }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  getBeaconMapAll() {
    this.beaconMapService.getAll()
      .pipe(first())
      .subscribe(res => {
        if (res.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Beacon Maps...', res.beaconMapDtolist)
          this.blockbeaconMap = res.beaconMapDtolist;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  getBranchAll(id) {
    this.branchService.getAll()
      .pipe(first())
      .subscribe(res => {
        if (res.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          this.globalBranch = res.data1.filter((item) => item.refCustomerId == id);
          console.log('Respective Branches...', this.globalBranch)
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
    this.custService.getAllCustomers()
      .pipe(first())
      .subscribe(res => {
        if (res.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          this.globalCustomers = res.dataList;
          console.log('Customers...', this.globalCustomers)
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  getCustomer() {
    if (this.custId == 0) {
      this.custName = "Super Admin"
      this.getCustomerAll();
      this.newBlockBeaconMap.get('refCustId').setValidators(Validators.required);
    }
    else {
      this.newBlockBeaconMap.get('refCustId').clearValidators();
      this.custService.getCustomerById(this.custId)
        .pipe(first())
        .subscribe(res => {
          if (res.status.error) {
            Swal.fire({
              type: 'error',
              title: res.status.message,
            });
          } else {
            console.log('Current User...', res.data.custName)
            this.custName = res.data.custName;
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

  getAllBlocks(id) {
    this.blockService.getAll()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          this.globalBlock = res.data1.filter((item) => item.refBranchId == id);
          console.log('Respected Blocks...', this.globalBlock)
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  openForm() {
    this.showList = false;
    this.showForm = true;
    this.formInfo = "Create";
    this.btnName = "Save";
  }

  //Cancel New Form
  cancel() {
    this.showList = true;
    this.showForm = false;
    this.submitted = false;
    this.globalBlock = [];
    if (this.custId == 0) this.globalBranch = [];
    this.newBlockBeaconMap.reset();
  }

  // Save new Form
  onSubmit() {
    this.submitted = true;
    if (this.newBlockBeaconMap.invalid) {
      console.log(this.newBlockBeaconMap.get('refCustId').errors);
      return;
    }
    if (this.custId != 0) this.newBlockBeaconMap.value.refCustId = this.custId;
    console.log(this.newBlockBeaconMap.value)
    this.cancel();
    // this.beaconMapService.create(this.newBlockBeaconMap.value)
    //   .pipe(first())
    //   .subscribe(res => {
    //     console.log('response ', res);
    //     if (res.error) {
    //       Swal.fire({
    //         type: 'error',
    //         title: res.message,
    //       });
    //       this.cancel();
    //     } else {
    //       Swal.fire({
    //         type: 'success',
    //         showConfirmButton: true,
    //         title: res.message,
    //       });
    //       this.getBeaconMapAll();
    //       this.cancel();
    //     }
    //   }, error => {
    //     Swal.fire({
    //       type: 'error',
    //       title: 'Oops...',
    //       text: 'Something went wrong!',
    //     });
    //     this.cancel();
    //   });
  }

  //Update Form open
  editBlockBeaconMap(data) {
    this.showForm = true;
    this.showList = false;
    this.newBlockBeaconMap.patchValue(data);
  }

  // Onchange branch get Respected blocks
  onChangeBranch(id) {
    this.newBlockBeaconMap.get('refBlkId').reset()
    this.getAllBlocks(id);
  }

  // Onchange customer get respected Branches
  onChangeCustomer(id) {
    this.newBlockBeaconMap.get('refBranchId').reset();
    this.getBranchAll(id);
  }

  // Beacon Selection functions

  multiSelectLeft(batch) {
    if (this.leftFieldName.indexOf(batch) === -1) {
      this.leftFieldName.push(batch);
    } else {
      const _index = this.leftFieldName.indexOf(batch);
      this.leftFieldName.splice(_index, 1);
    }
    console.log(this.leftFieldName)

  }

  multiSelectRight(batch) {
    if (this.rightFieldName.indexOf(batch) === -1) {
      this.rightFieldName.push(batch);
      console.log('add');
    } else {
      const _index = this.rightFieldName.indexOf(batch);
      this.rightFieldName.splice(_index, 1);
      console.log('remove');
    }
    console.log(this.rightFieldName)

  }

  pushOne() {
    if (this.leftFieldName) {
      this.leftFieldName.forEach(element => {
        this.fields.push(element);
        this.fieldlist.splice(this.fieldlist.indexOf(element), 1);
      });
    }
    this.leftFieldName = [];
  }

  popOne() {
    if (this.rightFieldName) {
      this.rightFieldName.forEach(element => {
        this.fieldlist.push(element);
        this.fields.splice(this.fields.indexOf(element), 1);
      });
    }
    this.rightFieldName = [];
  }

  pushAll() {
    this.fieldlist.forEach(element => {
      this.fields.push(element);
    });
    this.fieldlist = [];
    this.leftFieldName = [];
    this.rightFieldName = [];
  }

  popAll() {
    this.fields.forEach(element => {
      this.fieldlist.push(element);
    });
    this.fields = [];
    this.leftFieldName = [];
    this.rightFieldName = [];
  }

  resetFields() {
    this.fieldlist = [];
    this.templField.forEach(element => {
      this.fieldlist.push(element);
    });
    this.fields = [];
    this.leftFieldName = [];
    this.rightFieldName = [];
  }

}
