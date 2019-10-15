import { ShiftComponent } from './superadmin/masters/customer/shift/shift.component';
import { ConfirmationDialogComponent } from './../shared/confirmation-dialog/confirmation-dialog.component';
import { DesignationComponent } from './superadmin/masters/customer/designation/designation.component';
import { DepartmentComponent } from './superadmin/masters/customer/department/department.component';
import { CountryService } from './superadmin/masters/country/services/country.services';
import { CountryComponent } from './superadmin/masters/country/country.component';
import { IndustryComponent } from './superadmin/masters/industry/industry.component';
import { IndustryService } from './superadmin/masters/industry/services/industry.service';
import { StateService } from './superadmin/masters/state/services/state.services';
import { CustomerViewComponent } from './superadmin/masters/customer/view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonDataService } from 'app/shared/services/common.services';
import { AuthenticationService } from 'app/login/services/authentication.service ';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JwPaginationComponent } from 'jw-angular-pagination';



import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';


import { DragulaService } from 'ng2-dragula';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';
import { AuthService } from 'app/shared/auth/auth.service';
import { SharedModule } from 'app/shared/shared.module';
import { FullLayoutComponent } from 'app/layouts/full/full-layout.component';
import { ContentLayoutComponent } from 'app/layouts/content/content-layout.component';
import { SAdminComponent } from './superadmin/sadmin.component';
import { JwtInterceptor } from 'app/shared/auth/jwt.interceptor';
import { StateComponent } from './superadmin/masters/state/state.component';
import { CustomerComponent } from './superadmin/masters/customer/customer.component';
import { CustomerService } from './superadmin/masters/customer/services/customer.services';
import { ContractorComponent } from './superadmin/masters/customer/contractor/contractor.component';
import { ConfirmationDialogService } from 'app/shared/confirmation-dialog/confirmation-dialog.service';
import { BeaconComponent } from './superadmin/masters/beacon/beacon.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    DashboardComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
    SAdminComponent,
    StateComponent,
    CustomerComponent,
    JwPaginationComponent,
    CustomerViewComponent,
    IndustryComponent,
    CountryComponent,
    ContractorComponent,
    DepartmentComponent,
    DesignationComponent,
    ConfirmationDialogComponent,
    BeaconComponent,
    ShiftComponent
  ],
  imports: [
    StoreModule.forRoot({}),
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR KEY'
    }),
    PerfectScrollbarModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthenticationService,
    CommonDataService,
    CustomerService,
    StateService,
    IndustryService,
    CountryService,
    DragulaService,
    ConfirmationDialogService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  entryComponents: [ ConfirmationDialogComponent ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }