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
export class ShiftService {

    constructor(private http: HttpClient) { }

    getAllBranch() {
        return this.http.get<any>(environment.baseUrl + '/api/company/master/branch/getAll', httpOptions)
            .pipe(map(res => {
                return res;
            }));
    }

    getAllBranchByCustId(custId: any) {
        const param = {'refCustomerId': custId};
        return this.http.post<any>(environment.baseUrl + '/api/company/master/branch/getAllByCustId', param, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    get() {
        return this.http.get<any>(environment.baseUrl + '/api/customer/master/shift/getAll', httpOptions)
            .pipe(map(res => {
                return res;
            }));
    }

    getByCustId(custId: any) {
        const param = {'refCustId': custId};
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/shift/getAllByCustId', param, httpOptions)
            .pipe(map(res => {
                return res;
            }));
    }

    create(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/shift/create', data, httpOptions)
            .pipe(map(res => {
                return res;
            }));
    }

    update(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/shift/updateByShiftId', data, httpOptions)
            .pipe(map(res => {
                return res;
            }));
    }

    delete(data: any) {
        const param = { "shiftId": data}
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/shift/deleteByShiftId', param, httpOptions)
            .pipe(map(res => {
                return res;
            }));
    }

    detailsByBranchId(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/shift/getShiftDetailsByBranchId', data, httpOptions)
            .pipe(map(res => {
                return res;
            }));
    }

}
