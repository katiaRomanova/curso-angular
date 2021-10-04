import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetallesVendehumoComponent } from './components/detalles-vendehumo/detalles-vendehumo.component';
import { ListaVendehumosComponent } from './components/lista-vendehumos/lista-vendehumos.component';
import { AddVendehumoComponent } from './components/add-vendehumo/add-vendehumo.component';
import { InfoVendehumoComponent } from './components/info-vendehumo/info-vendehumo.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallesVendehumoComponent,
    ListaVendehumosComponent,
    AddVendehumoComponent,
    InfoVendehumoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
