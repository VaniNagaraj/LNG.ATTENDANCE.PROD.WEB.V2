import { data } from './../../shared/data/smart-data-table';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { CommonDataService } from 'app/shared/services/common.services';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({ providedIn: 'root' })
export class ModuleService {

    constructor(private http: HttpClient, private router: Router, private commonService: CommonDataService) {
    }

    GetUserModule(loginId) {
        console.log('module service called...');
        const param = { 'loginId': loginId };
        return this.http.post<any>(environment.baseUrl + '/api/company/module/user/getUserModuleMapping', param, httpOptions)
        .pipe(map( res => {
            console.log(res);
            return res;
        }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        if (localStorage.getItem('superLogin') === 'true') {
            this.router.navigate(['/super/admin/login']);
          } else {
            this.router.navigate(['/login']);
          }
    }

}
