import {Component} from "@angular/core";

export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template: `
   <h1>{{title}}</h1>
   <h2>{{hero.name}} details!</h2>
   <div><label>id: </label>{{hero.id}}</div>
   <div>
   <label>name: </label>
   <input type="text" [(ngModel)]="hero.name">
   </div>
   `,*/
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    name: 'Windstorm',
    id: 1
  };
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {
    console.log(this.heroes);
  }
}

