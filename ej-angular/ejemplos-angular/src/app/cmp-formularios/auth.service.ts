import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:  HttpClient) { }

  login(usuario: string, password: string): Observable <any> {

    const datosLogin = {
      usuario,
      password
    }
    return this.http.post('http://localhost:3005/login', datosLogin);
  }

  logout() {
    localStorage.removeItem('jwtToken');
  }

  //tiene que estar en otro lugar:
  //aqui está solo para hacer comprobaciones
  getDatos() {
    return this.http.get('http://localhost:3005/datos');
  }
}
