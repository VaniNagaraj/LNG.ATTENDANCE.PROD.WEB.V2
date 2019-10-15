import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent } from 'app/layouts/full/full-layout.component';
import { ContentLayoutComponent } from 'app/layouts/content/content-layout.component';
import { Full_ROUTES } from 'app/shared/routes/full-layout.routes';
import { CONTENT_ROUTES } from 'app/shared/routes/content-layout.routes';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';
import { SAdminComponent } from './superadmin/sadmin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/dashboard1',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: '',
  //   component: DashboardComponent,
  //   children: [
  //     { path: 'superadmin', component: SAdminComponent, canActivate: [AuthGuard]}
  //   ]
  // },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
  {
    path: '**',
    redirectTo: 'pages/error'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
