import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './services/Authentication.service ';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    myLogin: FormGroup;
    loading = false;
    invalidLogin = false;
    submitted = false;
    returnUrl: string;
    template = '<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif">';


    // tslint:disable-next-line: max-line-length
    constructor(
                 private router: Router,
                 private formBuilder: FormBuilder,
                 private route: ActivatedRoute,
                 private authenticationService: AuthenticationService,
                 private spinnerService: Ng4LoadingSpinnerService,
                 ) {
        // redirect to home if already logged in
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            this.router.navigate(['/dashboard/admin']);
        }
        localStorage.setItem('superLogin', 'false');
    }

    ngOnInit(): void {
        this.myLogin = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() { return this.myLogin.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.myLogin.invalid) {
            return;
        }

        this.loading = true;
        // this.show();
        this.spinnerService.show();
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    if (data.status.error) {
                        this.submitted = false;
                        this.loading = false;
                        this.spinnerService.hide();
                        Swal.fire({
                            type: 'error',
                            title: data.status.message,
                        });
                    } else {
                        console.log('navigating to dashbaord...');
                        this.spinnerService.hide();
                        this.router.navigate(['/dashboard/admin']);
                       // window.location.href = './dashboard';
                    }
                },
                error => {
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
