import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { SliderImg } from './mock/mock-images-slider';

@Component({
  selector: 'app-slider-img',
  templateUrl: './slider-img.component.html',
  styleUrls: ['./slider-img.component.scss']
})
export class SliderImgComponent implements OnInit {

  @Input() title = '';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoHeight: true,
    navSpeed: 700,
    navText: ['back', 'next'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  img_slider = SliderImg ;

  constructor() { }

  ngOnInit(): void {
  }

}
