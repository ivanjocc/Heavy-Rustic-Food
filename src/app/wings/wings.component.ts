import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wings',
  templateUrl: './wings.component.html',
  styleUrls: ['./wings.component.css']
})
export class WingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alitas: Array<any> = [
    { title: 'BBQ', description: '6 und, 12 und, 18 und, 24 und', image: '../../assets/img/wings.jpeg', price: '$ 12, $ 20, $ 26, $ 34' },
    { title: 'Ajo y Parmesano', description: '6 und, 12 und, 18 und, 24 und', image: '../../assets/img/wings-2.jpeg', price: '$ 12, $ 20, $ 26, $ 34' },
    { title: 'Queso Cheddar y Tocino Crunch', description: '6 und, 12 und, 18 und, 24 und', image: '../../assets/img/wings-3.jpeg', price: '$ 12, $ 20, $ 26, $ 34' }
  ];
}
