import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './login/changepassword/changepassword.component';
import { ForgotPasswordComponent } from './login/forgotpassword/forgotpassword.component';

const config: ExtraOptions = {
  onSameUrlNavigation: 'reload'
};

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, config)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
