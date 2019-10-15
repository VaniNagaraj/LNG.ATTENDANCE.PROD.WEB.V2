import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SuperAdminAuthenticationService } from './services/Authentication.service ';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-super-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class SuperAdminLoginComponent implements OnInit {
    myLogin: FormGroup;
    loading = false;
    invalidLogin = false;
    submitted = false;
    returnUrl: string;
    adminType: string;



    // tslint:disable-next-line: max-line-length
    constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private authenticationService: SuperAdminAuthenticationService) {
        // redirect to home if already logged in
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            this.router.navigate(['/dashboard/admin']);
        }
        this.adminType = 'admin';
        localStorage.setItem('superLogin', 'true');
    }

    ngOnInit(): void {
        this.myLogin = this.formBuilder.group({
            username: ['', Validators.required],
            customer: [],
            adminType: [],
            password: ['', Validators.required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() { return this.myLogin.controls; }

    showCustomer() {
        console.log('Radion...', this.adminType);
    }

    onSubmit() {
        this.submitted = true;
        if (this.myLogin.invalid) {
            return;
        }

        this.loading = true;

        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    if (data.status.error) {
                        this.submitted = false;
                        this.loading = false;
                        Swal.fire({
                            type: 'error',
                            title: data.status.message,
                        });
                    } else {
                        console.log('navigating to dashbaord...');
                        this.router.navigate(['/dashboard/admin']);
                       // window.location.href = './dashboard';
                    }
                },
                error => {
                    this.loading = true;
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                });
    }

}
