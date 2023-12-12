import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Charecter } from '../../interfaces/charecter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList : Charecter [ ] = [
    {
      name: 'Picoro',
      power: 1500
    }
  ];

  onDeletePersonaje(id:string):void{
    this.onDelete.emit(id);
  }
}
