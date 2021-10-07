import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VendehumosService {

  constructor(private httClient: HttpClient) { }

  getVendehumos() {
    return this.httClient.get(`${environment.BASE_URL_API}/vendehumos`);
  }

  votar(vendehumoId: number, votos: number) {
    return this.httClient.patch(`${environment.BASE_URL_API}/vendehumos/${vendehumoId}`, {votos: votos+1})
  }

  getVendeHumosbyId(id: string) {
    return this.httClient.get(`${environment.BASE_URL_API}/vendehumos/` + id);
  }

  getUsuarioById(id: number) {
    return this.httClient.get(`${environment.BASE_URL_API}/usuarios/${id}`)
  }

  getVendeHumosConCategorias() {
    return this.httClient.get(`${environment.BASE_URL_API}/vendehumos`)
      .pipe(
        mergeMap((vendehumos: any) => {
          
          const arrayCategoriasIds = vendehumos.map((vendehumo: any) => vendehumo.categoriaId);
          console.log(arrayCategoriasIds);
          //[[1,3], [3], [1,2,3]]
          const todasLasCategoriasIds = arrayCategoriasIds.flat();
          console.log(todasLasCategoriasIds);
          //[1, 3, 3, 1, 2, 3]
          const categoriasIdsUnicas = [... new Set(todasLasCategoriasIds)];
          console.log(categoriasIdsUnicas);
          //[1, 2, 3]
          const peticionesdeCategoriasIds = categoriasIdsUnicas.map(id => {
            return this.httClient.get(`${environment.BASE_URL_API}/categorias/${id}`)
          });
          //juntamos datos de todas categorias obtenidas en un array,
          return forkJoin(peticionesdeCategoriasIds)
            .pipe(
              map(categorias => {
                vendehumos.forEach((vendehumo: any) => {
                  const categoriasDeTarea = categorias.filter((categoria: any) => vendehumo.categoriaId.includes(categoria.id));
                  vendehumo.categorias = categoriasDeTarea;
                  delete vendehumo.categoriaId;
                });
                return vendehumos;
              })
            )
        })
      )
  }

  getVendehumoConCategorias(id: number) {
    return this.httClient.get(`${environment.BASE_URL_API}/vendehumos/${id}`)
      
      .pipe(
        mergeMap((vendehumo: any) => {
          //hacemos peticiones:
          const peticionesACategorias = vendehumo.categoriaId.map((categoriaId: any) => {
            //devuelve un array de observables:
            return this.httClient.get(`${environment.BASE_URL_API}/categorias/${categoriaId}`)
          });

          return forkJoin(peticionesACategorias)
            .pipe(
              map(categorias => {
                console.log(categorias);
                //eliminamos categorias
                delete vendehumo.categoriaId;
                //creamos un objeto tarea con categorias (no solo id, todo),
                return { ...vendehumo, categorias }
              }));
        })
      )
  }
}
