import { RouterModule, Routes } from '@angular/router';
import { AddVendehumoComponent } from './components/add-vendehumo/add-vendehumo.component';
import { DetallesUsuarioComponent } from './components/detalles-usuario/detalles-usuario.component';
import { DetallesVendehumoComponent } from './components/detalles-vendehumo/detalles-vendehumo.component';
import { ListaVendehumosComponent } from './components/lista-vendehumos/lista-vendehumos.component';

const RUTAS: Routes = [
    { path: 'vendehumos', component: ListaVendehumosComponent },
    //{ path: 'detalles-vendehumo', component: DetallesVendehumoComponent },
    { path: 'vendehumos/:id', component: DetallesVendehumoComponent ,
     children: [{ path: 'usuarios/:id', component:  DetallesUsuarioComponent}]},
    { path: 'nuevo-vendehumos', component: AddVendehumoComponent},
   // { path: 'usuarios/:id', component:  DetallesUsuarioComponent /*, outlet: 'right'*/},
    { path: '', redirectTo: 'vendehumos', pathMatch: 'full' }
]

export const RoutingModule = RouterModule.forRoot(RUTAS);