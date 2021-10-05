import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   console.log('pasa por interceptor');
  
   //copiamos request,
    const newRequest = request.clone({
      headers: request.headers.append('Authorization', '1234')
    });

    return next.handle(newRequest)
    .pipe(
      map(resp => {
       /* console.log("resp", resp);
        return new HttpResponse({
          body: [],
          headers: new HttpHeaders({
            'MiCabecera': 'response interceptada'
          })
        })*/
        return resp;
      })
    );
  }
}
