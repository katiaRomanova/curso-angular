import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private usuariosServise: UsuariosService) { }

  usuario: any = null;

  ngOnInit(): void {
    console.log(this.activateRoute);
   /* this.activateRoute.params.subscribe((params) => {
      console.log({params});
      params.id

    })*/
    //paramMap es un Observable,
    this.activateRoute.paramMap.subscribe((params) => {
      console.log({params});

      if(params.has('id')){
        const id = params.get('id');

        if(id) {
            this.usuariosServise.getUsuarioById(id)
            //también se puede obligar a asignar un valor:
            //this.usuariosServise.getUsuarioById(id!)
            .subscribe((usuario: any) => {
              this.usuario = usuario;
            });
        }
      
      }
    })
  }

}
