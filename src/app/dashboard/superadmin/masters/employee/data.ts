import { Injectable } from '@angular/core';

@Injectable()
export class showUpdate {

    constructor() {}

    showEdit: boolean;
    showList: boolean;
    personal = {
        empName: String,
        empMobile: Number,
        empGender: String,
        empType: String,
        empCont: String,
        empMgr: String,
        empDOJ: String,
        mgrService: Boolean
    }

    setPersonal(data) {
        this.personal = data;
    }

    getPersonal() {
        return this.personal;
    }
}