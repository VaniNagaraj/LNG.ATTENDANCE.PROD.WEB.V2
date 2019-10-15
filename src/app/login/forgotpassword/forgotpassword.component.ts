import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../services/authentication.service ';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  loading = false;
  submitted = false;
  template = '<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif">';


  // tslint:disable-next-line: max-line-length
  constructor(
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private spinnerService: Ng4LoadingSpinnerService,
              ) { }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      userName: ['', Validators.required],
    });
  }

  get f() { return this.forgotForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.forgotForm.invalid) {
        return;
    }

    this.loading = true;
    this.spinnerService.show();
    this.authenticationService.forgotPassword(this.f.userName.value)
    .pipe(first())
    .subscribe(
      res => {
        if (res.error) {
          this.loading = true;
          this.spinnerService.hide();
          Swal.fire({
              type: 'error',
              title: res.message,
          });
      } else {
        this.loading = true;
        this.spinnerService.hide();
        Swal.fire({
          type: 'success',
          title: res.message,
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
