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
export class IndustryService {

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<any>(environment.baseUrl + '/api/company/industry/type/findAll', httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    create(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/company/industry/type/create', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    update(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/company/industry/type/update', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

    delete(data: any) {
        return this.http.post<any>(environment.baseUrl + '/api/company/industry/type/delete', data, httpOptions)
        .pipe(map(res => {
            return res;
        }));
    }

}
