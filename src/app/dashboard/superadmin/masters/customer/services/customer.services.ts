import { environment } from './../../../../../../environments/environment'
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CustomerService {

    constructor(private http: HttpClient) { }

    getAllCustomers() {
        return this.http.get<any>(environment.baseUrl + '/api/company/customer/onboarding/findAll', httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    saveCustomer(customer: any) {
        return this.http.post<any>(environment.baseUrl + '/api/company/customer/onboarding/create', customer, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    getCustomerById(custId: any) {
        const param = { 'custId': custId };
        return this.http.post<any>(environment.baseUrl + '/api/company/customer/onboarding/findByCustomerId', param, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    updateCustomers(customer: any) {
        return this.http.post<any>(environment.baseUrl + '/api/company/customer/onboarding/updateCustomer', customer, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    deleteCustomer(custId: any) {
        const param = { 'custId': custId };
        return this.http.post<any>(environment.baseUrl + '/api/company/customer/onboarding/deleteCustomer', param, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

}
