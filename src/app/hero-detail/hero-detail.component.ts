import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Location} from "@angular/common";
import "rxjs/add/operator/switchMap";

import {Hero} from "./../hero";
import {HeroService} from "./../hero.service";
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {

  // hero: Hero;
  @Input() hero: Hero;

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  constructor(private heroService: HeroService,
              private location: Location,
              private route: ActivatedRoute) {
  }

}
