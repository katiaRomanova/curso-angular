import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetallesVendehumoComponent } from './components/detalles-vendehumo/detalles-vendehumo.component';
import { ListaVendehumosComponent } from './components/lista-vendehumos/lista-vendehumos.component';
import { AddVendehumoComponent } from './components/add-vendehumo/add-vendehumo.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.routes';
import { DetallesUsuarioComponent } from './components/detalles-usuario/detalles-usuario.component';
import { ComponentsComponent } from './components/components.component';


@NgModule({
  declarations: [
    AppComponent,
    DetallesVendehumoComponent,
    ListaVendehumosComponent,
    AddVendehumoComponent,
    DetallesUsuarioComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
