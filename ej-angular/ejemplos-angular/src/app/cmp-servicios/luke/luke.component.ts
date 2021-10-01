import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { EventosService } from '../eventos.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-s-luke',
  templateUrl: './luke.component.html',
  styleUrls: ['./luke.component.css'],
  //para que cada tenía su lista de tareas,
  //providers: [DatosService]
})
export class LukeComponent implements OnInit {

  tareas: Array<Tarea> = [];
  nuevaNoticia: string = '';

  constructor(
    private eventosService: EventosService,
    private datosSevice: DatosService) { }

  ngOnInit(): void {
    //Obtener noticia,

    this.eventosService.darNoticia
      .subscribe((datos) => {
        this.nuevaNoticia = datos;
      })

      this.tareas = this.datosSevice.getTareas();
    
  }

  guardarTarea(event: any) {
    console.log('luke');
    this.datosSevice.addTarea(event.target.value, 'Luke');

    this.tareas = this.datosSevice.getTareas().filter(t => t.autor === 'Luke');
  }
}
