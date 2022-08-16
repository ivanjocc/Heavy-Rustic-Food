import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papa',
  templateUrl: './papa.component.html',
  styleUrls: ['./papa.component.css']
})
export class PapaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  papas: Array<any> = [
    { title: 'Papas Rustic Heavy', description: 'Papas Francesas, Carne Desmenuzada, Salchicha Suiza, Salsa Cheddar, Aros de Cebolla, Tocineta Crunch, Cebollin, Salsa de Ajo', image: '../../assets/img/papa.jpeg', price: '$ 20' }
  ];
}
