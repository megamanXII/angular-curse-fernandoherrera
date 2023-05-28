import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharactersComponent } from './components/characters/characters.component';


@NgModule({
  exports: [
    MainPageComponent  
  ],
  declarations: [
    MainPageComponent,
    ListComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SaintSeiyaModule { }
