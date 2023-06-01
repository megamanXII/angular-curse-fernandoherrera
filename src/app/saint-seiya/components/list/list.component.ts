import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    }];

    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();
    
    onDeleteCharacter(id?: string):void{
      if( !id ) return;   // Si no viene el index que no haga nada.

      console.log({id});
      this.onDelete.emit(id);
    }
}
