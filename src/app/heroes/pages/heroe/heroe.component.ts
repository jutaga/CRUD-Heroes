import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  //id del heroe
  //mostrarlo en consola

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router
              ) { }

  ngOnInit() {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroePorId(id)))
      .subscribe(heroe => this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }
}
