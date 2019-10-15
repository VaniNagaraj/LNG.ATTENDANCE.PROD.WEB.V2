import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sadmin',
    templateUrl: './sadmin.component.html',
    styleUrls: ['./sadmin.component.scss']
})

export class SAdminComponent implements OnInit {
    custId: number;

    constructor() { }
    ngOnInit() {
        const currUser = JSON.parse(localStorage.getItem('currentUser'));
        this.custId = currUser.refCustId;
        console.log('cust id', this.custId);
    }

}
