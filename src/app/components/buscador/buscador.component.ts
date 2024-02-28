import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes:Heroe[] = [];
  palabra!:string;

  constructor( private _activatedRoute:ActivatedRoute, private _heroesService: HeroesService, private _router:Router ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.palabra = params['palabra'];
      this.heroes = this._heroesService.buscarHeroes(params['palabra']);
    });
  }

  verHeroe(index:number){
    this._router.navigate(['/heroe', index]);
  }

}
