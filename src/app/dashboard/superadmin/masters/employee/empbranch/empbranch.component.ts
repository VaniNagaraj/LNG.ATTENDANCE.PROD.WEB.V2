import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { showUpdate } from '../data';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { BranchService } from '../../branch/service/branch.service';

@Component({
  selector: 'app-empbranch',
  templateUrl: './empbranch.component.html',
  styleUrls: ['./empbranch.component.scss']
})
export class EmpbranchComponent implements OnInit {

  submitted1: boolean = false;

  branchForm: FormGroup;
  globalBranch = [
    { id: 1, name: 'Branch 1' },
    { id: 2, name: 'Branch 2' },
    { id: 3, name: 'Branch 3' },
  ]

  constructor(private fb: FormBuilder, private dis: showUpdate,
    private branchService: BranchService) { }

  ngOnInit() {
    this.branchForm = this.fb.group({
      brId: [null, Validators.required],
      brFrom: ['', Validators.required]
    });

    this.getBranchAll();
  }

  get f1() { return this.branchForm.controls };

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

  submitBranch() {
    this.submitted1 = true;
    if (this.branchForm.invalid) {
      return;
    }
    this.branchForm.value.brFrom = this.branchForm.get('brFrom').value.year + '-' + this.branchForm.get('brFrom').value.month + '-' + this.branchForm.get('brFrom').value.day;
    console.log(this.branchForm.value)
    this.submitted1 = false;
  }

  close() {
    this.branchForm.reset();
    this.submitted1 = false;
    this.dis.showEdit = false;
    this.dis.showList = true;
  }

}
