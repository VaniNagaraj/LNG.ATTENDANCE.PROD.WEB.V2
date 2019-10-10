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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
