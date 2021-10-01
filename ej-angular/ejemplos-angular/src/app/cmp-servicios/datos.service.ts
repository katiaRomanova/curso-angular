import { Injectable, EventEmitter} from '@angular/core';
import { Tarea } from './tarea';
import { v4 as uuidv4 } from 'uuid';

//es lo mismo que ponerlo en app.module en providers
// funciona para todos los elementos, nivel global,
 @Injectable({
  providedIn: 'root'
}) 

//@Injectable() 

export class DatosService {

  tareas: Array<Tarea> = [
    new Tarea('Eliminar la etrella de la muerte', false, 'Leia', uuidv4()),
    new Tarea('Hacer algo más', true, 'Luke', uuidv4())
  ]

  tareaGuardada = new EventEmitter<string>();

  constructor() { }

  getTareas(): Array<Tarea> {
    return this.tareas;
  }

  addTarea(titulo: string, autor: string): void {
    this.tareas.push(new Tarea(titulo, false, autor, uuidv4()));

    this.tareaGuardada.emit(autor + ' ha guardado una tarea');
  }
}
