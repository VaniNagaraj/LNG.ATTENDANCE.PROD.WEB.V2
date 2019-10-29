import { environment } from './../../../../../../environments/environment'
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';



const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
    })
};

@Injectable({ providedIn: 'root' })
export class BranchService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>(environment.baseUrl + '/api/company/master/branch/getAll', httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    getAllBranchByCustId(refCustomerId: number) {
        const param = { 'refCustomerId': refCustomerId };
        return this.http.post<any>(environment.baseUrl + '/api/company/master/branch/getAllByCustId', param, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    create(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/company/master/branch/create', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    getBranchById(brId: any) {
        const param = { 'brId': brId };
        return this.http.post<any>(environment.baseUrl + '/api/company/master/branch/getBranchDetailsByBranchId', param, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    update(data: any) {
        console.log("update", data)
        return this.http.post<any>(environment.baseUrl + '/api/company/master/branch/updateByBranchId', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    delete(brId: any) {
        const param = { 'brId': brId };
        return this.http.post<any>(environment.baseUrl + '/api/company/master/branch/deleteByBranchId', param, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

}
