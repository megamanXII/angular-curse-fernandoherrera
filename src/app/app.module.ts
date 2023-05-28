import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { SaintSeiyaModule } from './saint-seiya/saint-seiya.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    SaintSeiyaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
