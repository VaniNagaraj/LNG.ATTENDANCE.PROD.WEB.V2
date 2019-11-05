import { Injectable } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable()
export class showUpdate {
    globalEmployees: any;
    globalManagers: any;

    constructor(private empService: EmployeeService) { }

    showEdit: boolean;
    showList: boolean;
    empId: number;

    setPersonal(empId) {
        this.empId = empId;
    }

    getPersonal() {
        return this.empId;
    }

    getManagers() {
        this.empService.getAll()
            .pipe(first())
            .subscribe(res => {
                if (res.status.error) {
                    Swal.fire({
                        type: 'error',
                        title: res.status.message,
                    });
                } else {
                    console.log('Employees...', res.employyeList)
                    this.globalManagers = res.employyeList.filter((item)=> item.empIsSupervisor_Manager == true);
                }
            }, error => {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                });
            });
            return this.globalManagers;
    }
}