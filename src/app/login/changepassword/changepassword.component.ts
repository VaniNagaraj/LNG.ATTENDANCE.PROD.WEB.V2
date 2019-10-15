import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service ';
import Swal from 'sweetalert2';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})

export class ChangePasswordComponent implements OnInit {
  submitted = false;
  regularForm: FormGroup;
  loading = false;
  template = '<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif">';


  // tslint:disable-next-line: max-line-length
  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private spinnerService: Ng4LoadingSpinnerService,
              ) { }

  ngOnInit() {
    this.regularForm = this.formBuilder.group({
      userName: ['', Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  get f() { return this.regularForm.controls; }


  onSubmit() {
    console.log('change submit...');
    this.submitted = true;

    if (this.regularForm.invalid) {
      return;
    }
    this.loading = true;
    this.spinnerService.show();
    this.authenticationService.ChangePassword(this.f.userName.value, this.f.oldPassword.value, this.f.newPassword.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.error) {
            this.loading = true;
            this.spinnerService.hide();
            Swal.fire({
              type: 'error',
              title: data.message,
            });
          } else {
            this.loading = true;
            this.spinnerService.hide();
            Swal.fire({
              type: 'success',
              title: data.message,
            });
            this.router.navigate(['/login']);
          }
        }, error => {
          this.loading = true;
          this.spinnerService.hide();
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        });
  }

}
