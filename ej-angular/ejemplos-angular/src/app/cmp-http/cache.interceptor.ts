import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url);
    console.log(request.method);

    const method = request.method;
    //si hacemos muchas peticiones get, para no hacerlas tantas en el servidor,
    //guardamos datos en local storage,
    if (method === 'GET') {
      const datos = localStorage.getItem(request.url);
      //si no hay datos en caché los guardamos en local storage,
      if (!datos) {
        return next.handle(request)
          .pipe(
            map((resp: any) => {
              console.log(resp);
              localStorage.setItem(request.url, JSON.stringify(resp.body));
              return resp;
            })
          );
      }
      //cuando ya hay datos, las obtenemos de la caché y devolvemos una respuesta
      //no se realiza la petición al servidor,,
      else {
        return new Observable((observer) => {
          observer.next(new HttpResponse({
            body: JSON.parse(datos)
          }))
        })
      }
    }
    //con otras peticiones las hacemos al servidor,
    return next.handle(request);
    //para actualizar datos hay que hacerlo aquí,
    //.pipe( map());
  }
}
