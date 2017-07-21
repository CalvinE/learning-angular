import { Component, OnInit } from '@angular/core';

import { Hero } from './models/hero';

import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[] = null;
  selectedHero: Hero = null;

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.getHeroes(true);
  }

  getHeroes(goSlow: boolean = false): void {
    if (goSlow === true) {
      this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    } else {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
