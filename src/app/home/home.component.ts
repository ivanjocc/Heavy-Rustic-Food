import { Component, OnInit } from '@angular/core';
// import { faMoon } from '@fortawesome/free-solid-svg-icons';
// import { faSun } from '@fortawesome/free-solid-svg-icons';
// import { faBurger } from '@fortawesome/free-solid-svg-icons';
// import { faHotdog } from '@fortawesome/free-solid-svg-icons';
// import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { Papa } from 'src/modelos/Papa';
import { Perritos } from 'src/modelos/Perritos';
import { Wings } from 'src/modelos/Wings';
import { Hamburger } from 'src/modelos/Hamburger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class AppComponent {
  title = 'final-project';
  // faBars = faBars;
  // faMoon = faMoon;
  // faSun = faSun;
  // faBurger = faBurger;
  // faHotdog = faHotdog;
  // faHashtag = faHashtag;
  
  hamburger : Hamburger[]= [
    { title: 'Classic Heavy', description: 'Pan Brioche, Carne Angus 150gr, Tocineta, Cebolla Caramelizada, Queso cheddar, Lechuga crespa, Tomate, Salsa de la casa', image: '../assets/img/hamburger.jpeg', price: '$ 20' },
    { title: 'Doble Rustics', description: 'Pan Brioche, Carne Angus 300gr, Tocineta, Cebolla Caramelizada, Doble queso Cheddar, Lechuga crespa, Tomate, Salsa de la casa', image: 'asdasd',price: '$ 28' },
    { title: 'Rocky Cheese', description: 'Pan Brioche, Carne Angus 150gr, Queso Cheddar, Cebolla Frita, Tocineta, Salsa Queso Cheddar', image: 'asdasd', price: '$ 20' },
    { title: 'Real Heavy', description: 'Pan Brioche, Carne Angus 150gr, Carne Desmenuzada, Aros de Cebolla, Queso Cheddar, Salsa de ajo, Tocineta', image: 'asdasd', price: '$ 25' },
  ];

  perros : Perritos[]= [
    { title: 'Suizo Tradicional', description: 'Salchicha suiza , Cebolla, Tocineta, Queso Mozarrella, Salsa de ajo', image: 'asdasd', price: '$ 12' },
    { title: 'Suizo Heavy', description: 'Salchicha Suiza, Cebolla, Queso Mozarrella, Carne Desmenuzada, Cebollin, Tocineta Crunch, Salsa Cheddar, Salsa de ajo', image: 'asdasd',price: '$ 17' }
  ];

  alitas : Wings[]= [
    { title: 'BBQ', description: '6 und, 12 und, 18 und, 24 und', image: 'asdasd', price: '$ 12, $ 20, $ 26, $ 34' },
    { title: 'Ajo y Parmesano', description: '6 und, 12 und, 18 und, 24 und', image: 'asdasd',price: '$ 12, $ 20, $ 26, $ 34 ' },
    { title: 'Queso Cheddar y Tocino Crunch', description: '6 und, 12 und, 18 und, 24 und', image: 'asdasd', price: '$ 12, $ 20, $ 26, $ 34' }
  ];

  papas : Papa[]= [
    { title: 'Papas Rustic Heavy', description: 'Papas Francesas, Carne Desmenuzada, Salchicha Suiza, Salsa Cheddar, Aros de Cebolla, Tocineta Crunch, Cebollin, Salsa de Ajo', image: 'asdasd', price: '$ 20' }
  ];
}