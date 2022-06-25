import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups.component';
import { RouterModule, Routes } from '@angular/router';
import { TitleSectionModule } from 'src/app/shared/components/title-section/title-section.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: GroupsComponent }];

@NgModule({
  declarations: [
    GroupsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TitleSectionModule,
    DragDropModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class GroupsModule { }
