import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './../models/user';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(username, password) {
        const param = { 'loginName': username, 'loginPassword': password };
        // tslint:disable-next-line: max-line-length
        return this.http.post<any>(environment.baseUrl + '/api/company/users/login', param, httpOptions)
            .pipe(map(user => {
                if (!user.status.error) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.data));
                }
                return user;
            }));
    }

    ChangePassword(userName, oldPassword, newPassword) {
        const param = { 'userName': userName, 'oldPassword': oldPassword, 'newPassword': newPassword };
        return this.http.post<any>(environment.baseUrl + '/api/company/users/change/password', param, httpOptions)
            .pipe(map(res => {
                return res;
            }));
    }

    forgotPassword(userName) {
        const param = { 'userName': userName };
        return this.http.post<any>(environment.baseUrl + '/api/company/users/forgot/password', param, httpOptions)
            .pipe(map(res => {
                return res;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        if (localStorage.getItem('superLogin') === 'true') {
            this.router.navigate(['/super/admin/login']);
          } else {
            this.router.navigate(['/login']);
          }
    }
}
