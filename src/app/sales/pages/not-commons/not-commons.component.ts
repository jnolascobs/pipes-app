import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  // i18nSelect
  name: string = 'Juan';
  gender: string = 'male';
  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  // i18nPlural
  customers: string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Paula']
  customersMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  changeCustomer() {
    console.log(this.name);
    this.name = 'Ana';
    this.gender = 'female'
  }

  deleteCustomer() {
    console.log(this.gender);
    this.customers.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Juan',
    age: 21,
    city: 'Seattle, USA'
  }

  // Json Pipe
  heroes = [
    {
      name: 'Ironman',
      fly: true
    },
    {
      name: 'Capitán América',
      fly: false
    },
    {
      name: 'Doctor Strange',
      fly: true
    }
  ]

  // Async Pipe
  myObservable = interval(2000); // 0,1,2,3,4,5...
  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
