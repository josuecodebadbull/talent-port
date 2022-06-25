import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';
import { TitleSectionModule } from 'src/app/shared/components/title-section/title-section.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import {MatTabsModule} from '@angular/material/tabs';
import { FormEmployeeModule } from 'src/app/shared/forms/form-employee/form-employee.module';
import { EmployeesService } from './services/employee.service';

const routes: Routes = [{ path: '', component: EmployeesComponent }];

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TitleSectionModule,
    TableModule,
    MatTabsModule,
    FormEmployeeModule
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
