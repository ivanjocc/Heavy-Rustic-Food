import { Component, OnInit } from '@angular/core';
import { Papa } from 'src/modelos/Papa';
import { Perritos } from 'src/modelos/Perritos';
import { Wings } from 'src/modelos/Wings';
import { Hamburger } from 'src/modelos/Hamburger';
import { Input } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})

export class HamburgerComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  hamburguesas: Array<any> = [
    { title: 'Classic Heavy', description: 'Pan Brioche, Carne Angus 150gr, Tocineta, Cebolla Caramelizada, Queso cheddar, Lechuga crespa, Tomate, Salsa de la casa', image: '../assets/img/hamburger.jpeg', price: '$ 20' },
    { title: 'Doble Rustics', description: 'Pan Brioche, Carne Angus 300gr, Tocineta, Cebolla Caramelizada, Doble queso Cheddar, Lechuga crespa, Tomate, Salsa de la casa', image: '../assets/img/hamburger-2.jpeg',price: '$ 28' },
    { title: 'Rocky Cheese', description: 'Pan Brioche, Carne Angus 150gr, Queso Cheddar, Cebolla Frita, Tocineta, Salsa Queso Cheddar', image: '../assets/img/hamburger-3.jpeg', price: '$ 20' },
    { title: 'Real Heavy', description: 'Pan Brioche, Carne Angus 150gr, Carne Desmenuzada, Aros de Cebolla, Queso Cheddar, Salsa de ajo, Tocineta', image: '../assets/img/hamburger.jpeg', price: '$ 25' },
  ];
}

export class AppComponent {
  title = 'final-project';
  // faBars = faBars;
  // faMoon = faMoon;
  // faSun = faSun;
  // faBurger = faBurger;
  // faHotdog = faHotdog;
  // faHashtag = faHashtag;
  
//   hamburguesas : Hamburger []= [
//     { title: 'Classic Heavy', description: 'Pan Brioche, Carne Angus 150gr, Tocineta, Cebolla Caramelizada, Queso cheddar, Lechuga crespa, Tomate, Salsa de la casa', image: '../assets/img/hamburger.jpeg', price: '$ 20' },
//     { title: 'Doble Rustics', description: 'Pan Brioche, Carne Angus 300gr, Tocineta, Cebolla Caramelizada, Doble queso Cheddar, Lechuga crespa, Tomate, Salsa de la casa', image: 'asdasd',price: '$ 28' },
//     { title: 'Rocky Cheese', description: 'Pan Brioche, Carne Angus 150gr, Queso Cheddar, Cebolla Frita, Tocineta, Salsa Queso Cheddar', image: 'asdasd', price: '$ 20' },
//     { title: 'Real Heavy', description: 'Pan Brioche, Carne Angus 150gr, Carne Desmenuzada, Aros de Cebolla, Queso Cheddar, Salsa de ajo, Tocineta', image: 'asdasd', price: '$ 25' },
//   ];

//   perros : Perritos[]= [
//     { title: 'Suizo Tradicional', description: 'Salchicha suiza , Cebolla, Tocineta, Queso Mozarrella, Salsa de ajo', image: 'asdasd', price: '$ 12' },
//     { title: 'Suizo Heavy', description: 'Salchicha Suiza, Cebolla, Queso Mozarrella, Carne Desmenuzada, Cebollin, Tocineta Crunch, Salsa Cheddar, Salsa de ajo', image: 'asdasd',price: '$ 17' }
//   ];

//   alitas : Wings[]= [
//     { title: 'BBQ', description: '6 und, 12 und, 18 und, 24 und', image: 'asdasd', price: '$ 12, $ 20, $ 26, $ 34' },
//     { title: 'Ajo y Parmesano', description: '6 und, 12 und, 18 und, 24 und', image: 'asdasd',price: '$ 12, $ 20, $ 26, $ 34' },
//     { title: 'Queso Cheddar y Tocino Crunch', description: '6 und, 12 und, 18 und, 24 und', image: 'asdasd', price: '$ 12, $ 20, $ 26, $ 34' }
//   ];

//   papas : Papa[]= [
//     { title: 'Papas Rustic Heavy', description: 'Papas Francesas, Carne Desmenuzada, Salchicha Suiza, Salsa Cheddar, Aros de Cebolla, Tocineta Crunch, Cebollin, Salsa de Ajo', image: 'asdasd', price: '$ 20' }
//   ];
}