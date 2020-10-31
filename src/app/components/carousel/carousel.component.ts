import { Component, Input, OnInit } from '@angular/core';

export interface ISlide {
  imgUrl: string,
  text: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() title: string;

  currentSlide: number = 0;
  slidesToShow: number;
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  slides: ISlide[];

  constructor() {
    this.slides = [
      {
        imgUrl: 'https://images.springer.com/sgw/books/medium/9783030031428.jpg',
        text: 'Sepsis Management in Resource-limited Settings'
      },
      {
        imgUrl: 'https://images.springer.com/sgw/books/medium/9783319191317.jpg',
        text: 'Tuberculosis in Adults and Children'
      },
      {
        imgUrl: 'https://www.schoolnursesupplyinc.com/assets/images/82141.jpg',
        text: 'Red Book Atlas of Pediatric Infectious Diseases'
      },
      {
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/810MB5O1TJL.jpg',
        text: "Mandell, Douglas, and Bennett's Principles and Practice of…"
      },
      {
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg',
        text: "Harry Potter and the sorcerer's stone"
      },
      {
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg',
        text: 'Harry Potter and the goblet of fire'
      },
      {
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/91YH0ZtB9XL.jpg',
        text: 'Harry Potter and the half blood prince'
      }
    ]
  }

  ngOnInit(): void { }
  
  slickInit(e) {
    this.slidesToShow = e.slick.options.slidesToShow;
  }

  afterChange(e) {
    this.currentSlide = e.slick.currentSlide;
    this.slidesToShow = e.slick.options.slidesToShow;
  }
}
