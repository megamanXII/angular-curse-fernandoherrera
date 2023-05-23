import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'batman';
  public age:  number = 89;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  obtenerHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = `Green Lantern`;
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'batman';
    this.age = 89;
  }
}
