import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anakin',
  templateUrl: './anakin.component.html',
  styleUrls: ['./anakin.component.css']
})
export class AnakinComponent implements OnInit {

  nombreLuke = 'Luke SkyWalker';
  nombreLeia = 'Leia Organa';

  constructor() { }

  ngOnInit(): void {
  }

  cambiaNombreLeia(nuevoNombre: any): void {
    this.nombreLeia = nuevoNombre;
  }

  cambiaNombreLuke(nuevoNombre: any): void {
    console.log('a', {nuevoNombre});
    this.nombreLuke = nuevoNombre;
    console.log('NL: ' + this.nombreLuke);
  }

}
