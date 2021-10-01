import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { EventosService } from '../eventos.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-s-leia',
  templateUrl: './leia.component.html',
  styleUrls: ['./leia.component.css'],
  //para que cada tenía su lista de tareas,
  //providers: [DatosService]
})
export class LeiaComponent implements OnInit {
  
  tareas: Array<Tarea> = [];
  mensaje: string = '';

  constructor(
    private eventosService: EventosService,
    private datosSevice: DatosService) { }

  ngOnInit(): void {

    this.tareas = this.datosSevice.getTareas();

    this.datosSevice.tareaGuardada.subscribe(msg => {
        this.mensaje = msg;
    })
  }

  darLaNoticia(){
    //servicios
    const mensaje = ['Luke, soy tu hermana', 
    'Hola Luky, que grande te has vuelto'];

    const msg = mensaje[Math.floor(Math.random() * mensaje.length)];
    this.eventosService.darNoticia.emit(msg);
  }

  guardarTarea(event: any) {
    console.log('laia');
    this.datosSevice.addTarea(event.target.value, 'Leia');
  
    this.tareas = this.datosSevice.getTareas().filter(t => t.autor === 'Leia');
  }
}
