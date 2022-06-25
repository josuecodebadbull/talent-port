import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
