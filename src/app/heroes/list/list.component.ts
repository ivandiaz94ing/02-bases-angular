import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public herosName: string[] = ['Spiderman', 'Batman', 'Ironman', 'Hulk', 'Thork'];
  public heroeeliminado? : string;


  borrarUltimoHeroe(): void{
    this.heroeeliminado = this.herosName.pop();
  }

}
