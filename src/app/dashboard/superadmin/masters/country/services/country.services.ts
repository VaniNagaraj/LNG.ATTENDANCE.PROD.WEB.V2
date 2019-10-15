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
export class CountryService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>(environment.baseUrl + '/api/company/master/country/getAll', httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    create(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/company/master/country/create', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    update(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/company/master/country/updateByCountryId', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    delete(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/company/master/country/deleteByCountryId', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

}
