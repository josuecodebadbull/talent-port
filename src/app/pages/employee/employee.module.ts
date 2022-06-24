import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';
import { TitleSectionModule } from 'src/app/shared/components/title-section/title-section.module';
import { TableModule } from 'src/app/shared/components/table/table.module';

const routes: Routes = [{ path: '', component: EmployeesComponent }];

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TitleSectionModule,
    TableModule
  ]
})
export class EmployeesModule { }
