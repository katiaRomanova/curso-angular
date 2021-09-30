import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anakin',
  templateUrl: './anakin.component.html',
  styleUrls: ['./anakin.component.css']
})
export class AnakinComponent implements OnInit {

  nombreLuke = 'Luke SkyWalker';
  nombreLeia = 'Leia Organa';

  constructor() {
    //en el caso de función de flecha cometar la línea siguente:
    this.cambiaNombreLuke2 = this.cambiaNombreLuke2.bind(this);
   // this.cambiaNombreLuke = this.cambiaNombreLuke.bind(this);
  }

  ngOnInit(): void {
  }

  cambiaNombreLeia(nuevoNombre: any): void {
    this.nombreLeia = nuevoNombre;
  }

  cambiaNombreLuke(): any {
   /*  console.log('a', {nuevoNombre});
    console.log('a THIS: ',this); */
    return (nuevoNombre: any) => this.nombreLuke = nuevoNombre;
    /* console.log('NL: ' + this.nombreLuke); */
  }

  cambiaNombreLuke2() {
    /* //this de anakin
    console.log(this);
    this.cambiaNombreLuke('Katia');

    //quitar void en este caso.
    //return () =>  */
    this.nombreLuke = 'Katia';
  }

}
