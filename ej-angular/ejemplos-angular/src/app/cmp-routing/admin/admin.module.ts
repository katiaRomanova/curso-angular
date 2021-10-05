import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRouterModule } from './admin.routes';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    //trae lo mínimo necesario para que funcione module
    CommonModule,
    AdminRouterModule
  ]
})
export class AdminModule { }
