import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Thor', 'Ironman', 'Hulk', 'BirdMan'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop(); // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
    console.log(this.deletedHero); // con las llaves lo presenta como objeto
  }
}
