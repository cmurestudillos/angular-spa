import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {

  // Propiedades a recibir fuera del componente
  @Input() heroe:any = {};
  @Input() index!:number;

  // Propiedades que va a mandar fuera del componente
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private _router:Router ) {
    this.heroeSeleccionado = new EventEmitter();
   }

  verHeroe(){
    this._router.navigate(['/heroe', this.index]);
  }

}
