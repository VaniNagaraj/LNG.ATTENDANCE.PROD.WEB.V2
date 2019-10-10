import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SAdminComponent } from './sadmin.component';
import { SuperAdminModuleRouting } from './sadmin-routing.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        SuperAdminModuleRouting
    ],
    declarations: [
        SAdminComponent
    ]
})
export class SuperAdminModule { }
