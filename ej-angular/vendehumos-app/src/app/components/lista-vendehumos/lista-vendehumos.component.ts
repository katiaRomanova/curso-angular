import { Component, OnInit } from '@angular/core';
import { VendehumosService } from 'src/app/servicios/vendehumos.service';

@Component({
  selector: 'app-lista-vendehumos',
  templateUrl: './lista-vendehumos.component.html',
  styleUrls: ['./lista-vendehumos.component.css']
})
export class ListaVendehumosComponent implements OnInit {

  vendehumos: any = [];

  constructor(private vendehumosService: VendehumosService) { }

  //mostramos la lista de vendehumos,
  ngOnInit(): void {

   /* this.vendehumosService.getVendehumos()
    .subscribe(datos => {
      console.log(datos);
      this.vendehumos = datos;
    })*/

    this.getVendehumos();
  }

  //cuando se pulsa el botón votar
  votar(id: number, votos: number) {

   this.vendehumosService.votar(id, votos)
    .subscribe((vendehumoVotado) => {

      this.vendehumos = this.vendehumos.map((vendehumo: any) => {

        if(vendehumo.id === id){
          return vendehumoVotado;
        }
        else{
          return vendehumo;
        }
      })
      console.log(vendehumoVotado);
    })
  }


  getVendehumos(){
    this.vendehumosService.getVendeHumosConCategorias()
    .subscribe((vendehumos: any) => {
      console.log('vendehumos:');
      console.log(vendehumos);

      this.vendehumos = vendehumos;
    })
  }
}
