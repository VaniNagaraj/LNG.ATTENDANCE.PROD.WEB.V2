import { SearchPipe } from './../shared/pipes/search.pipe';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';

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
    SearchPipe
  ],
  imports: [
    StoreModule.forRoot({}),
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot(),
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
    DragulaService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
