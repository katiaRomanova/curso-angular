import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { OcultarNumerosTarjetaPipe } from './ocultar-numeros-tarjeta.pipe';



@NgModule({
  declarations: [
    TarjetaCreditoComponent,
    OcultarNumerosTarjetaPipe
  ],
//para que sean disponibles fuera del módulo,
//hay que exportar los componentes o pipes o que sea,
//que necesitamos fuera del módulo,
  exports: [
    TarjetaCreditoComponent,
    OcultarNumerosTarjetaPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
