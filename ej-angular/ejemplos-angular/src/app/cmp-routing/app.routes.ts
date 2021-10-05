import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { NuevoUsuarioGuard } from './nuevo-usuario/nuevo-usuario.guard';
import { RUTAS_USUARIOS } from './usuarios.routes';


const RUTAS_APP: Routes = [
    //http://localhost:4200
    //{ path: '', component: ListaUsuariosComponent },

    //http://localhost:4200/usuarios
    //como hacer una ruta anidada (para que se muestran dos componentes 
    // a la vez usuarios y usuarios/:id):
    { path: 'usuarios', component: ListaUsuariosComponent, 
    children: RUTAS_USUARIOS },
    //http://localhost:4200/usuarios/4
    //{ path: 'usuarios/:id', component: InfoUsuarioComponent },
    //http://localhost:4200/nuevo-usuario
    { path: 'nuevo-usuario', component: NuevoUsuarioComponent, canDeactivate: [NuevoUsuarioGuard] },
    //http://localhost:4200

    //{ path: 'admin', loadChildren: './admin/admin.module.ts#AdminModule'},
    { path: 'admin', loadChildren: () => import('./admin/admin.module')
    .then(modulo => modulo.AdminModule) },
    
    { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
    //ruta con asteriscos tiene que ir siempre la última,
    //porque todas las rutas coinciden con asteriscos,
    //http://localhost:4200/no-existe
    { path: '**', component: Error404Component }

]

export const RoutingModule = RouterModule.forRoot(RUTAS_APP);
