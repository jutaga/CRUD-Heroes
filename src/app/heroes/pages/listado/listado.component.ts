import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
      .col-lg-2 {
        margin-bottom: 20px;
        margin-right: 20px;
      }
    `
  ]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesServices: HeroesService) { }

  ngOnInit(): void {
    this.heroesServices.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
}
