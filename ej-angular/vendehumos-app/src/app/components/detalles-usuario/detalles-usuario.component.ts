import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendehumosService } from 'src/app/servicios/vendehumos.service';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.css']
})
export class DetallesUsuarioComponent implements OnInit {

  usuario: any = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private vendehumosService: VendehumosService
    
  ) { }

  ngOnInit(): void {
    console.log(this.activateRoute);

    this.activateRoute.paramMap.subscribe((params) => {
      console.log({params});

      if(params.has('id')){
        const id = params.get('id');

        if(id) {
            this.vendehumosService.getUsuarioById(parseInt(id))
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
