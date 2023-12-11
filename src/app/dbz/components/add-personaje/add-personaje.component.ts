import { Component, EventEmitter, Output } from '@angular/core';
import { Charecter } from '../../interfaces/charecter.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Charecter> = new EventEmitter();



  public personaje : Charecter = {
    name: '' ,
    power: 0
  }

  emitPersonaje():void{
    //debugger;
    if (this.personaje.name.length === 0 ) return;
    this.onNewPersonaje.emit(this.personaje);

    this.personaje = { name : '', power : 0}
}

}
