import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  lowerName: string = 'gabriel';
  upperName: string = 'GABRIEL';
  fullName: string = 'gAbRiel maRtiNeZ';

  fecha: Date = new Date();

}
