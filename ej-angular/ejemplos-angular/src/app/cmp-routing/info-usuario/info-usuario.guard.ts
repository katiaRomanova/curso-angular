import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoUsuarioGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    //para hacer comprobaciones si usuario puede ver info o no,
    //devuelve true o false,
    return confirm('Quieres ver la info??');
    //return false;
    //return localStorage.getItem('token') === '1234';
  }
  
}
