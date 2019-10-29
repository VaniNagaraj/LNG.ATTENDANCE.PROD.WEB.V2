import { CustLeaveTypeComponent } from './superadmin/Leave/custLeaveType/custLeaveType.component';
import { NotificationComponent } from './superadmin/masters/customer/notification/notification.component';
import { HolidayCalendarComponent } from './superadmin/masters/customer/holidayCalendar/holidayCalendar.component';
import { CustManualAttendanceComponent } from './superadmin/Attendance/custManualAttendance/custManualAttendance.component';
import { ShiftComponent } from './superadmin/masters/customer/shift/shift.component';
import { ContractorComponent } from './superadmin/masters/customer/contractor/contractor.component';
import { CountryComponent } from './superadmin/masters/country/country.component';
import { IndustryComponent } from './superadmin/masters/industry/industry.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent } from 'app/layouts/full/full-layout.component';
import { ContentLayoutComponent } from 'app/layouts/content/content-layout.component';
import { Full_ROUTES } from 'app/shared/routes/full-layout.routes';
import { CONTENT_ROUTES } from 'app/shared/routes/content-layout.routes';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';
import { SAdminComponent } from './superadmin/sadmin.component';
import { StateComponent } from './superadmin/masters/state/state.component';
import { CustomerComponent } from './superadmin/masters/customer/customer.component';
import { DepartmentComponent } from './superadmin/masters/customer/department/department.component';
import { DesignationComponent } from './superadmin/masters/customer/designation/designation.component';
import { BeaconComponent } from './superadmin/masters/beacon/beacon.component';
import { BranchComponent } from './superadmin/masters/branch/branch.component';
import { BlockBeaconMapComponent } from './superadmin/masters/block-beacon-map/block-beacon-map.component';
import { BlockComponent } from './superadmin/masters/block/block.component';
import { EmployeeComponent } from './superadmin/masters/employee/employee.component';
import { PersonalComponent } from './superadmin/masters/employee/personal/personal.component';
import { EmpbranchComponent } from './superadmin/masters/employee/empbranch/empbranch.component';
import { EmpDepartmentComponent } from './superadmin/masters/employee/empdepartment/empdepartment.component';
import { EmpDesignationComponent } from './superadmin/masters/employee/empdesignation/empdesignation.component';
import { EmpShiftComponent } from './superadmin/masters/employee/empshift/empshift.component';
import { WeeklyoffComponent } from './superadmin/masters/employee/weeklyoff/weeklyoff.component';

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
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'admin', component: SAdminComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'customer', component: CustomerComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'country', component: CountryComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'beacon', component: BeaconComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'state', component: StateComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'industry', component: IndustryComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'contractor', component: ContractorComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'department', component: DepartmentComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'designation', component: DesignationComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'shift', component: ShiftComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'branch', component: BranchComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'beaconmap', component: BlockBeaconMapComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'block', component: BlockComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard],
        children: [
          { path: 'personal', component: PersonalComponent, canActivate: [AuthGuard], data: { title: 'Personal'}},
          { path: 'branch', component: EmpbranchComponent, canActivate: [AuthGuard], data: { title: 'Branch'} },
          { path: 'department', component: EmpDepartmentComponent, canActivate: [AuthGuard], data: { title: 'Department'} },
          { path: 'designation', component: EmpDesignationComponent, canActivate: [AuthGuard], data: { title: 'Designation'} },
          { path: 'shift', component: EmpShiftComponent, canActivate: [AuthGuard], data: { title: 'Shift'} },
          { path: 'weeklyoff', component: WeeklyoffComponent, canActivate: [AuthGuard], data: { title: 'Weeklyoff'} },
        ]
       },
      { path: 'holiday/calendar', component: HolidayCalendarComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'notification', component: NotificationComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'manual', component: CustManualAttendanceComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
      { path: 'customer/type', component: CustLeaveTypeComponent, children: Full_ROUTES, canActivate: [AuthGuard] },
    ]
  },
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
