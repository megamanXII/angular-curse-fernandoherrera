import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-saintseiya-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    public characters: Character[] = [{
        name: "Shyru",
        power: 2500
    },
    {
        name: "Ikki",
        power: 1450
    },
    {
        name: "Shun",
        power: 345
    }
]

onNewCharacter(character: Character): void{
    console.log('Main Page', character);
    this.characters.push(character);
}
}