import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  hero: Hero = {
    name: 'Windstorm',
    id: 1
  };
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService,
              private router: Router) {
  }
}

