import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service ';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})

export class ChangePasswordComponent implements OnInit {
  submitted = false;
  regularForm: FormGroup;
  loading = false;


  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { }

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

    this.authenticationService.ChangePassword(this.f.userName.value, this.f.oldPassword.value, this.f.newPassword.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.error) {
            this.loading = true;
            Swal.fire({
              type: 'error',
              title: data.message,
            });
          } else {
            this.loading = true;
            Swal.fire({
              type: 'success',
              title: data.message,
            });
            this.router.navigate(['/login']);
          }
        }, error => {
          this.loading = true;
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        });
  }

}
