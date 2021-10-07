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
   console.log('Pasa por interceptor');

   const token = localStorage.getItem('jwtToken');
   
   if(token){
     const authHeader = `Bearer ${token}`;

     //copiamos request,
    const newRequest = request.clone({
      //headers: request.headers.append('Authorization', '1234');
      headers: request.headers.append('Authorization', authHeader)
    });

    return next.handle(newRequest);
   }
  
   //es else
    return next.handle(request)

/*     .pipe(
      map(resp => {
       /* console.log("resp", resp);
        return new HttpResponse({
          body: [],
          headers: new HttpHeaders({
            'MiCabecera': 'response interceptada'
          })
        })
        return resp;
      })
    ); */
  }
}
