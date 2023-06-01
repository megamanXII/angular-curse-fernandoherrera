import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { SaintSeiyaService } from '../services/saint-seiya-service.ts.service';

@Component({
    selector: 'app-saintseiya-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    constructor(public SaintSeiyaService: SaintSeiyaService) {
        
    }
}