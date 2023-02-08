import { HeroesService, Heroe } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  term!: string;
  heroes: Heroe[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.term = params['term'];
      let heroes = this._heroesService.searchHeroes(this.term);
      this.heroes = heroes;
    });
  }
}
