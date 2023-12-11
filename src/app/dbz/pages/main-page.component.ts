
import { Component } from '@angular/core';
import { Charecter } from '../interfaces/charecter.interface';

@Component({
  selector: 'app-main-dbz',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

public personajes : Charecter[] =[
  {
    name: 'Krillin',
    power: 1000
  },
  {
    name: 'Gokú',
    power: 9500
  },
  {
    name: 'Vegeta',
    power: 7500
  }
];

//main-page.component.ts
onNuevoPersonaje(personaje: Charecter):void{
  this.personajes.push(personaje );
}

ondeletePersonaje(index: number):void{
  //debugger;
  const arr1 = this.personajes.splice(index,1);
  // const arr2 = this.personajes.splice(index+1);
  console.log(`INDICE RECIBIDO ES: ${index}`);
  //this.personajes=[...arr1, ...arr2];
}
}
