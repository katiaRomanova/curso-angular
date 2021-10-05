import { Routes } from "@angular/router"; 
import { InfoUsuarioComponent } from "./info-usuario/info-usuario.component";
import { InfoUsuarioGuard } from './info-usuario/info-usuario.guard'

export const RUTAS_USUARIOS: Routes = [
    { path: ':id', component: InfoUsuarioComponent,  canActivate: [InfoUsuarioGuard] },
]
//canActivate para comprobar si tiene acceso usuario a esa ruta o no,
//canDeativate
//canLoad
//canActivateChild