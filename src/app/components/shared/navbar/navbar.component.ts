import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent{

  constructor( private _router:Router ) { }

  buscarHeroe( palabra:string ){
    this._router.navigate(['/buscar', palabra]);
  }

}
