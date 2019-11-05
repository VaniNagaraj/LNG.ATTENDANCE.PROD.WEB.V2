import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Number } from 'core-js';
import { BeaconmapService } from './services/beaconmap.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { BlockService } from '../block/services/block.service';


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

  globalBlock = [
    { blockId: 1, blockName: 'Block 1' },
    { blockId: 2, blockName: 'Block 2' },
    { blockId: 3, blockName: 'Block 3' },
    { blockId: 4, blockName: 'Block 4' }
  ]

  showNew: boolean = false;
  newBlockBeaconMap: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  // currectTableIndex = -1;
  updateBlockBeaconMap: FormGroup;
  pageOfItems: any[];
  custId: any;

  constructor(private formBuilder: FormBuilder,
    private beaconMapService: BeaconmapService,
    private blockService: BlockService) { }

  ngOnInit() {
    const currUser = JSON.parse(localStorage.getItem('currentUser'));
    this.custId = currUser.refCustId;
    console.log("Current user....",currUser)

    this.newBlockBeaconMap = this.formBuilder.group({
      refBlkId: [null, Validators.required],
      beaconCode: ['', Validators.required],
      beaconType: [null, Validators.required]
    });

    this.updateBlockBeaconMap = this.formBuilder.group({
      blkBeaconMapId: [],
      refBlkId: [null, Validators.required],
      beaconCode: ['', Validators.required],
      beaconType: [null, Validators.required]
    });

    this.getBeaconMapAll();
    this.getAllBlocks();

  }

  get f() { return this.newBlockBeaconMap.controls }
  get f1() { return this.updateBlockBeaconMap.controls }

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

  getAllBlocks() {
    this.blockService.getAll()
      .pipe(first())
      .subscribe(res => {
        if (res.status.error) {
          Swal.fire({
            type: 'error',
            title: res.status.message,
          });
        } else {
          console.log('Blocks...', res.data1)
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

  openForm() {
    this.showNew = true;
  }



  //Cancel New Form
  cancel() {
    this.showNew = false;
    this.submitted = false;
    this.newBlockBeaconMap.reset();
  }

  // Save new Form
  save() {
    this.submitted = true;
    if (this.newBlockBeaconMap.invalid) {
      return;
    }
    console.log(this.newBlockBeaconMap.value)
    this.beaconMapService.create(this.newBlockBeaconMap.value)
      .pipe(first())
      .subscribe(res => {
        console.log('response ', res);
        if (res.error) {
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
          this.getBeaconMapAll();
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



  //Update Form open
  editBlockBeaconMap(data) {
    this.showNew = false;
    data.showUpdate = true;
    this.updateBlockBeaconMap.patchValue(data);
  }

  // Update Data
  saveUpdate(data) {
    this.submitted1 = true;
    if (this.updateBlockBeaconMap.invalid) {
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
          this.beaconMapService.update(this.updateBlockBeaconMap.value)
            .pipe(first())
            .subscribe(res => {
              if (res.error) {
                this.cancelUpdate(data);
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
                this.getBeaconMapAll();
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
    this.updateBlockBeaconMap.reset()
  }

  // Delete Data
  deleteBlockBeaconMap(data) {
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
        this.beaconMapService.delete(data)
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
              this.getAllBlocks();
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
