import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NuevoUsuarioComponent } from './nuevo-usuario.component';

export interface ComponentCanDeactivate {
  puedoSalir: () => Observable<boolean | UrlTree> | Promise<boolean | 
  UrlTree> | boolean | UrlTree; 
}


@Injectable({
  providedIn: 'root'
})
export class NuevoUsuarioGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(
    component: ComponentCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean |
     UrlTree> | boolean | UrlTree {
    console.log(component);
    
      return component.puedoSalir();
  }
}
