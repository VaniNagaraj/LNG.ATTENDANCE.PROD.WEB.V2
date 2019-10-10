import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SAdminComponent } from './sadmin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        component: SAdminComponent,
        data: {
          title: 'Super Admin Dashboard'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminModuleRouting { }
