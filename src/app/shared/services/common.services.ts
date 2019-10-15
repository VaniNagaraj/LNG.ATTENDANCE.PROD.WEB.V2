import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CommonDataService {
    private user = new BehaviorSubject<string>('');

    currentUser = this.user.asObservable();

    changeUser(oType: string) { this.user.next(oType); }

}
