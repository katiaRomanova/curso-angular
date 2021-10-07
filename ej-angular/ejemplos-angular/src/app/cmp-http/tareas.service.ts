import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  URL = '';

  constructor(private httClient: HttpClient) { }

  getTareas() {
    return this.httClient.get(`${environment.BASE_URL_API}/tareas`, {
      //headers: { 'Authorization': '1234' }
    });
  }

  guardarTarea(tarea: any) {
    return this.httClient.post(`${environment.BASE_URL_API}/tareas`, tarea, {
      //headers: { 'Authorization': '1234' }
    });
  }

  completarTarea(tareaId: number, completada: boolean) {
    return this.httClient.patch(`${environment.BASE_URL_API}/tareas/${tareaId}`,
      { completada },
      {
        //headers: { 'Authorization': '1234' }
      })
  }

  eliminarTarea(tareaId: number) {
    return this.httClient.delete(`${environment.BASE_URL_API}/tareas/${tareaId}`,
      {
        //headers: { 'Authorization': '1234' }, 
        observe: 'response'
      })
  }

  getTareaConCategorias(id: number) {
    return this.httClient.get(`${environment.BASE_URL_API}/tareas/${id}`)
      //recibimos valores:
      .pipe(
        //devuelve los datos en un observable:
        //agrupmos observables de varios datos, 
        mergeMap((tarea: any) => {
          //hacemos peticiones:
          const peticionesACategorias = tarea.categoriasIds.map((cId: any) => {
            //devuelve un array de observables:
            return this.httClient.get(`${environment.BASE_URL_API}/categorias/${cId}`)
          });
          //forkJoin es otro observable,
          //cuando recibe resultado de peticiones,
          //junta varias observables en un array,
          return forkJoin(peticionesACategorias)
            .pipe(
              map(categorias => {
                console.log(categorias);
                //eliminamos categorias
                delete tarea.categoriasIds;
                //creamos un objeto tarea con categorias (no solo id, todo),
                return { ...tarea, categorias }
              }));
        })
      )
  }

  getTareasConCategorias() {
    return this.httClient.get(`${environment.BASE_URL_API}/tareas`)
      .pipe(
        mergeMap((tareas: any) => {
          //obtenemos ids de todas categorias de tareas que tenemos,
          const arrayCategoriasIds = tareas.map((tarea: any) => tarea.categoriasIds);
          console.log(arrayCategoriasIds);
          //[[1,3], [3], [1,2,3]]

          //los juntamos en un array,
          const todasLasCategoriasIds = arrayCategoriasIds.flat();
          console.log(todasLasCategoriasIds);
          //[1, 3, 3, 1, 2, 3]
          //set no permite valores repitidos, asi podamos sacar valores no repetidos,
          //obtenemos ids de categorias in repeticiones en un array,
          const categoriasIdsUnicas = [... new Set(todasLasCategoriasIds)];
          console.log(categoriasIdsUnicas);
          //[1, 2, 3]
          //hacemos petición para cada de los ids de categorias no repetidos,
          const peticionesdeCategoriasIds = categoriasIdsUnicas.map(id => {
            return this.httClient.get(`${environment.BASE_URL_API}/categorias/${id}`)
          });
          //juntamos datos de todas categorias obtenidas en un array,
          return forkJoin(peticionesdeCategoriasIds)
            .pipe(
              map(categorias => {
                tareas.forEach((tarea: any) => {
                  const categoriasDeTarea = categorias.filter((categoria: any) => tarea.categoriasIds.includes(categoria.id));
                  tarea.categorias = categoriasDeTarea;
                  delete tarea.categoriasIds;
                });
                return tareas;
              })
            )
        })
      )
  }

  getTareasPorCategoria(categoriaId: number) {
    return this.getTareas()
      .pipe(
        map((tareas: any) => {
          return tareas.filter((t: any) => t.categoriasIds.includes(categoriaId))
        })
      )
  }
}
