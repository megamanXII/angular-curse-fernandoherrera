import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'saintseiya-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Input()
    public characterList: Character[] = [{
      name: "Athena",
      power: 10
    }]

    onDeleteCharacter(index: number):void{
      console.log(index);
    }
}
