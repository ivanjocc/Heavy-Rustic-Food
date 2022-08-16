import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgCollection: Array<object> = [
    {
      image: '../../assets/img/hamburger-3.jpeg',
      thumbImage: '../../assets/img/hamburger-3.jpeg',
      alt: 'Hamburguesa',
      title: 'Hamburguesa'
    }, {
      image: '../../assets/img/hot-dog.jpeg',
      thumbImage: '../../assets/img/hot-dog.jpeg',
      title: 'Perro caliente',
      alt: 'Perro caliente'
    }, {
      image: '../../assets/img/papa.jpeg',
      thumbImage: '../../assets/img/papa.jpeg',
      title: 'Papas',
      alt: 'Papas'
    }, {
      image: '../../assets/img/wings.jpeg',
      thumbImage: '../../assets/img/wings.jpeg',
      title: 'Alitas',
      alt: 'Alitas'
    }, {
      image: '../../assets/img/wings-3.jpeg',
      thumbImage: '../../assets/img/wings-3.jpeg',
      title: 'Alitas',
      alt: 'Alitas'
    }, {
      image: '../../assets/img/papa-2.jpeg',
      thumbImage: '../../assets/img/papa-2.jpeg',
      title: 'Papas',
      alt: 'Papas'
    }
  ];
}
