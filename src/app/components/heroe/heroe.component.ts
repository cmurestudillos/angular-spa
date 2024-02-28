import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe:any = {};

  constructor( private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private _router:Router ) {
    // Escuchamos lo que nos tienen que mandar
    this._activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
   }

   volverHeroes(){
    this._router.navigate(['/heroes']);
  }

}
