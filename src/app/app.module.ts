import { SuperAdminAuthenticationService } from './superadminlogin/services/authentication.service ';
import { SuperAdminLoginComponent } from './superadminlogin/login.component';
import { CommonDataService } from 'app/shared/services/common.services';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';
import { SearchPipe } from 'app/shared/pipes/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './login/services/authentication.service ';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ForgotPasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { ChangePasswordComponent } from './login/changepassword/changepassword.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


@NgModule({
  declarations: [
    AppComponent,
    SuperAdminLoginComponent,
    LoginComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    SearchPipe
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [AuthenticationService, AuthGuard, CommonDataService, SuperAdminAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
