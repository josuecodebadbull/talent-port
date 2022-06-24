import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSectionComponent } from './title-section.component';
import { MenuNavigationModule } from '../menu-navigation/menu-navigation.module';



@NgModule({
  declarations: [
    TitleSectionComponent
  ],
  imports: [
    CommonModule,
    MenuNavigationModule
  ],
  exports: [
    TitleSectionComponent
  ]
})
export class TitleSectionModule { }
