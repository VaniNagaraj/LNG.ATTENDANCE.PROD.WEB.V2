import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from './../../login/services/Authentication.service ';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // tslint:disable-next-line: prefer-const
        // let currentUser = this.authenticationService.currentUserValue;
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (localStorage.getItem('currentUser')) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        } else {
            if (localStorage.getItem('superLogin') === 'true') {
                this.router.navigate(['/super/admin/login']);
              } else {
                this.router.navigate(['/login']);
              }
        }

        return next.handle(request);
    }
}
