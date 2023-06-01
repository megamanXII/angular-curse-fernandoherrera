import { Injectable } from '@angular/core';
import { v4 as uuid  } from 'uuid';

console.log(uuid());

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class SaintSeiyaService {

  public characters: Character[] = [{
    id: uuid(),
    name: "Shyru",
    power: 2500
    },
    {
    id: uuid(),
    name: "Ikki",
    power: 1450
    },
    {
    id: uuid(),
    name: "Shun",
    power: 345
    }
    ]

    onNewCharacter(character: Character): void{
    console.log('Main Page', character);
    // Con esto estoy diciendo a la interface los valores que va a tener cada una de las propiedades
    // const newCharacter: Character = {
    //id: uuid(), name: character.name, power: character.power
    //}

    const newCharacter: Character = {id: uuid(), ...character}; // Con esto quiere decir que defina el id en todas las propiedades de character.
    this.characters.push(newCharacter);
    }

    /* onDeleteCharacter(index: number){
    this.characters.splice(index, 1);
    } */

    deleteCharacterById(id:string){
      this.characters = this.characters.filter(character => character.id != id);
    }
}
