import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlockService } from './services/block.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { BranchService } from '../branch/service/branch.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlockComponent implements OnInit {

  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 10;

  blockForm: FormGroup;
  showNew: boolean = false;
  submitted = false;
  submitted1 = false;
  updateBlockForm: FormGroup;
  globalBlock: any = [];

  globalBranch: any = [];
  pageOfItems: any[];

  constructor(private fb: FormBuilder,
    private blockService: BlockService,
    private branchService: BranchService) { }

  ngOnInit() {
    this.blockForm = this.fb.group({
      blkLogicalName: ['', Validators.required],
      refBranchId: [null, Validators.required],
      blkGPSRadius: ['', Validators.required],
      blkLatLong: ['', Validators.required]
    });

    this.updateBlockForm = this.fb.group({
      blkId: [],
      blkLogicalName: ['', Validators.required],
      refBranchId: [null, Validators.required],
      blkGPSRadius: ['', Validators.required],
      blkLatLong: ['', Validators.required]
    });

    this.getAllBlock();
    this.getBranchAll();
  }

  get f() { return this.blockForm.controls }
  get f1() { return this.updateBlockForm.controls }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  getAllBlock() {
    this.blockService.getAll()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Beacon Maps...', res.data1)
          this.globalBlock = res.data1;
        }
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  getBranchAll() {
    this.branchService.getAll()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Beacon Maps...', res.data1)
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

  // New Form open
  openForm() {
    this.showNew = true;
  }

  //Cancel New Form
  cancel() {
    this.showNew = false;
    this.submitted = false;
    this.blockForm.reset();
  }

  // Save new Form
  save() {
    this.submitted = true;
    if (this.blockForm.invalid) {
      return;
    }
    console.log("Block....",this.blockForm.value)
    this.blockService.create(this.blockForm.value)
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
          this.getAllBlock();
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

  //Update Form open
  editCustomer(data) {
    data.showUpdate = true;
    this.cancel();
    this.updateBlockForm.patchValue(data);
  }

  // Update Data
  saveUpdate(data) {
    this.submitted1 = true;
    if (this.updateBlockForm.invalid) {
      console.log("I am Here")
      return;
    }
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
        this.blockService.update(this.updateBlockForm.value)
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
              this.getAllBlock();
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

  // Cancel Data
  cancelUpdate(data) {
    this.submitted1 = false;
    data.showUpdate = false;
    this.updateBlockForm.reset();
  }

  // Delete Data
  deleteCustomer(data) {
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
        this.blockService.delete(data.blkId)
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
              this.getAllBlock();
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

}