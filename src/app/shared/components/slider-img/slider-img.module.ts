import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderImgComponent } from './slider-img.component';



@NgModule({
  declarations: [
    SliderImgComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    SliderImgComponent
  ]
})
export class SliderImgModule { }
