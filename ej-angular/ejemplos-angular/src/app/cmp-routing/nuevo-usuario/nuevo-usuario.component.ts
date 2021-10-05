import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from './nuevo-usuario.guard';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit, ComponentCanDeactivate {

  datosGuardados = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  crearUsuario() {
    console.log('Guardando datos ...');
    setTimeout(() => {
      //Redirección
     // this.router.navigate(['/']);
     this.datosGuardados = true;
    }, 1000);
  }

   puedoSalir(){
    return this.datosGuardados || confirm('Perderas los cambios ...');
  }
}
