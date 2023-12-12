
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Charecter } from '../interfaces/charecter.interface';

@Component({
  selector: 'app-main-dbz',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

constructor( private dbzService : DbzService ){ }


get personajes():  Charecter[]{
  return this.dbzService.personajes;
}

ondeletePersonaje(id : string) : void {
  this.dbzService.ondeletePersonajeById(id);
}

onNewPersonaje(personaje : Charecter) : void {
  this.dbzService.onNuevoPersonaje(personaje);
}

}
