import { HeroesService, Heroe } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  constructor(private _heroesService: HeroesService, private router: Router) {
    console.log('constructor');
  }

  showHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
