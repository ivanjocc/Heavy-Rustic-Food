import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perritos',
  templateUrl: './perritos.component.html',
  styleUrls: ['./perritos.component.css']
})
export class PerritosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  perritos: Array<any> = [
    { title: 'Suizo Tradicional', description: 'Salchicha suiza , Cebolla, Tocineta, Queso Mozarrella, Salsa de ajo', image: '../../assets/img/hot-dog.jpeg', price: '$ 12' },
    { title: 'Suizo Heavy', description: 'Salchicha Suiza, Cebolla, Queso Mozarrella, Carne Desmenuzada, Cebollin, Tocineta Crunch, Salsa Cheddar, Salsa de ajo', image: '../../assets/img/hot-dog.jpeg',price: '$ 17' }
  ];
}
