import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  isUppercase: boolean = true;

  orderBy: string = '';

  heroes: Heroe[] = [
    {
      name: 'Ironman',
      fly: true,
      color: Color.rojo
    },
    {
      name: 'Capitán América',
      fly: false,
      color: Color.azul
    },
    {
      name: 'Doctor Strange',
      fly: true,
      color: Color.azul
    },
    {
      name: 'Bruja Escarlata',
      fly: true,
      color: Color.rojo
    },
    {
      name: 'Hulk',
      fly: false,
      color: Color.verde
    }
  ]

  changeArgs() {
    // (this.isUppercase) ? this.isUppercase = false : this.isUppercase = true;
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value: string) {
    this.orderBy = value;
    
  }

}
