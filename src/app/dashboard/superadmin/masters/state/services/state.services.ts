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
export class StateService {

    constructor(private http: HttpClient) { }

    getAllStates() {
        return this.http.get<any>(environment.baseUrl + '/api/company/master/state/getAll', httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    createState(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/company/master/state/create', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    updateState(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/company/master/state/updateByStateId', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    getStateByCountry(countryId: any) {
        const param = { 'refCountryId': countryId };
        return this.http.post<any>(environment.baseUrl + '/api/company/master/state/getStateDetailsByCountryId', param, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    getStateById(stateId: any) {
        const param = { 'stateId': stateId };
        return this.http.post<any>(environment.baseUrl + '/api/company/master/state/getStateDetailsByStateId', param, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    deleteState(data: any) {
        const param = { 'stateId': data };
        return this.http.post<any>(environment.baseUrl + '/api/company/master/state/deleteByStateId', param, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

}
