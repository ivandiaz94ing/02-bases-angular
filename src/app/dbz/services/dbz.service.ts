import { Injectable } from '@angular/core';
import { Charecter } from '../interfaces/charecter.interface';
import{v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public personajes : Charecter[] =[
  {
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Gokú',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
];

//main-page.component.ts
onNuevoPersonaje(personaje: Charecter):void{
  const newPersonaje: Charecter = {id: uuid(), ...personaje
  }

  this.personajes.push(newPersonaje );
}

// ondeletePersonaje(index: number):void{
//   //debugger;
//   this.personajes.splice(index,1);
//   //console.log(`INDICE RECIBIDO ES: ${index}`);
// }
ondeletePersonajeById(id: string):void{
  this.personajes = this.personajes.filter(personaje => personaje.id !== id)
}



}

