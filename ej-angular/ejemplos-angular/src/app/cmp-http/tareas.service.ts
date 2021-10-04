import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  URL = '';

  constructor(private httClient: HttpClient) { }

  getTareas() {
    return this.httClient.get(`${environment.BASE_URL_API}/tareas`  , {
      headers: { 'Authorization': '1234' }
    });
  }

  guardarTarea(tarea: any) {
    return this.httClient.post(`${environment.BASE_URL_API}/tareas`, tarea, {
      headers: { 'Authorization': '1234' }
    });
  }

  completarTarea(tareaId: number, completada: boolean) {
    return this.httClient.patch(`${environment.BASE_URL_API}/tareas/${tareaId}`,
      { completada },
      {
        headers: { 'Authorization': '1234' }
      })
  }

  eliminarTarea(tareaId: number) {
    return this.httClient.delete(`${environment.BASE_URL_API}/tareas/${tareaId}`,
      {
        headers: { 'Authorization': '1234' }, 
        observe: 'response'
      })
  }
}
