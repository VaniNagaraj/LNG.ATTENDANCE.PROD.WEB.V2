import { Industry } from './model/industry.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IndustryService } from './services/industry.service';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  industries: Industry;


  showNew = false;
  newIndustry: FormGroup;
  submitted = false;
  submitted1 = false;
  showUpdate = false;
  updateIndustry: FormGroup;
  updateIndustryFormData: FormGroup;

  
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 10;
  pageOfItems: Array<any>;
  
  constructor(private fb: FormBuilder, private industryService: IndustryService) { }

  ngOnInit() {
    this.newIndustry = this.fb.group({
      industryId: [],
      industryName: ['', Validators.required]
    });

    this.updateIndustry = this.fb.group({
      industryId: [],
      industryName: ['', Validators.required]
    });

    this.getAllIndustry();
  }

  get f() { return this.newIndustry.controls }
  get f1() { return this.updateIndustry.controls }

  getAllIndustry() {
    this.industryService.get()
    .pipe(first())
    .subscribe(res => {
      if (res.status.error) {
        this.submitted = false;
        Swal.fire({
          type: 'error',
          title: res.status.message,
        });
      } else {
        console.log('industry...', res)
        this.industries = res.industryTypeDtoList;
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
    for(let dataItem of this.pageOfItems){
      if(dataItem.showUpdate != undefined){
        dataItem.showUpdate = false;
      }
    }
    this.showNew = true;
  }

  // Cancel New Form
  cancel() {
    this.showNew = false;
    this.submitted = false;
    this.newIndustry.reset();
  }

  // Save new Form
  save() {
    console.log('save', this.newIndustry.value);
    this.submitted = true;
    if (this.newIndustry.invalid) {
      return;
    }
    this.showNew = false;
    this.industryService.create(this.newIndustry.value)
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
        this.getAllIndustry();
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
  editIndustry(data) {
    data.showUpdate = true;
    this.cancel();
    this.updateIndustry.patchValue(data);
  }

  // Update Data
  saveUpdate(data) {
    this.submitted1 = true;
    if (this.updateIndustry.invalid) {
      return;
    }
    else{
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
          this.industryService.update(this.updateIndustry.value)
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
              this.getAllIndustry();
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
    this.updateIndustry.reset();
  }

  // Delete Data
  deleteIndustry(data) {
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
        this.industryService.delete(data.industryId)
          .pipe(first())
          .subscribe((res) => {
            if (res.error) {
              Swal.fire({
                type: 'error',
                title: res.message,
              });
            } else {
              Swal.fire({
                type: 'success',
                title: res.message
              })
              this.getAllIndustry();
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
