import { environment } from './../../../../../../../environments/environment'
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class DepartmentService {

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<any>(environment.baseUrl + '/api/customer/master/department/getAll', httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    getByCustId(custId: any) {
        const param = {'refCustId': custId};
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/department/getAllbyCustId', param, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    create(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/department/create', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    update(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/department/updateByDepartmentId', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    delete(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/department/deleteByDepartmentId', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

}
