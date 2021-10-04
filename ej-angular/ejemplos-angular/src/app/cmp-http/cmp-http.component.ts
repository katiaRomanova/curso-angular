import { Component, OnInit } from '@angular/core';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {

  constructor(private tareaService: TareasService) { }

  ngOnInit(): void {

    this.tareaService.getTareas()
      .subscribe(datos => {
        console.log(datos);
      });
    ;
  }

  crearTarea() {
    const tarea = {
      titulo: "Tarea 7",
      completada: false,
      usuarioId: 1,
      fecha: "21/11/2021"
    }

    this.tareaService.guardarTarea(tarea).subscribe((tareaCreada) => {
      console.log(tareaCreada);
    });
  }

  completarTarea() {
    this.tareaService.completarTarea(7, true)
      .subscribe((tareaCompletada) => {
        console.log(tareaCompletada);
      })
  }

  borrarTarea(){
    this.tareaService.eliminarTarea(7).subscribe((resp)=> {
      console.log(resp);
      console.log('Se ha eliminado correctamente');
    })
  }
}
