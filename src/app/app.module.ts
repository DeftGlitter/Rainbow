import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadorCardComponent } from './component/jugador-card/jugador-card.component';
import { JugadorListComponent } from './component/jugador-list/jugador-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JugadorCardComponent,
    JugadorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
