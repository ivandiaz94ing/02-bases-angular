import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
        <h2>Counter: {{counter}}</h2>


      <button (click)="incrementarContador(1)">+1</button>
      <button (click)="resetContador()">Reset</button>
      <button (click)="incrementarContador(-1)">-1</button>
  `,
})
export class CounterComponent {

      public counter : number  = 10;

      public incrementarContador(valor:number): void{
        this.counter += valor;
      }
      resetContador(): void{
        this.counter = 10;
      }
}
