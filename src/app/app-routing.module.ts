import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'groups',
    loadChildren: () =>
      import('./pages/groups/groups.module').then((m) => m.GroupsModule),
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./pages/employee/employee.module').then((m) => m.EmployeesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
