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

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>(environment.baseUrl + '/api/customer/master/employee/findAll', httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    create(data: any) {
        console.log(JSON.stringify(data))
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/employee/create', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    getEmployeeById(empId: any) {
        const param = { 'empId': empId };
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/employee/findByEmployeeId', param, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    update(data: any) {
        console.log("update", data)
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/employee/updateEmployee', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    delete(empId: any) {
        const param = { 'empId': empId };
        return this.http.post<any>(environment.baseUrl + '/api/customer/master/employee/deleteEmployee', param, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    getEmployeeType() {
        return this.http.get<any>(environment.baseUrl + '/api/company/master/employee/type/findAll', httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

}
