import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendehumosService } from 'src/app/servicios/vendehumos.service';

@Component({
  selector: 'app-detalles-vendehumo',
  templateUrl: './detalles-vendehumo.component.html',
  styleUrls: ['./detalles-vendehumo.component.css']
})
export class DetallesVendehumoComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private vendehumosService: VendehumosService
  ) { }

  vendehumo: any = null;

  ngOnInit(): void {
    console.log(this.activateRoute);

    this.activateRoute.paramMap.subscribe((params) => {
      console.log({params});

      if(params.has('id')){
        const id = params.get('id');

        if(id) {
           // this.vendehumosService.getVendeHumosbyId(id)
           this.vendehumosService.getVendehumoConCategorias(parseInt(id))
            .subscribe((vendehumo: any) => {
              console.log(vendehumo);
              this.vendehumo = vendehumo;
            });
        }
    
      }
    })
  }

  onActivate(event: any) {
    console.log('event activate:', event)
  }

  onDeactivate(event: any) {
    console.log('event Deactivate:', event)
  }

}
