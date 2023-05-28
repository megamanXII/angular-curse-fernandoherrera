import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'saintseiya-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = {
      name: '',
      power: 0
    };

    saveCharacter():void {
      console.log(this.character);
      
      if(this.character.name.length === 0) return;
      
      this.onNewCharacter.emit(this.character);

      this.character = {name: "", power: 0 }
    }

    
}
