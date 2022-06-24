import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SliderImgModule } from 'src/app/shared/components/slider-img/slider-img.module';
import { TitleSectionModule } from 'src/app/shared/components/title-section/title-section.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SliderImgModule,
    TitleSectionModule  
  ]
})
export class HomeModule { }
