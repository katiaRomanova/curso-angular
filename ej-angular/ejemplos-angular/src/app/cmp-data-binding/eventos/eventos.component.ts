import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //para controlar que no se refresca la página,
  mostrarEnlace(event: any) {
    event.preventDefault();
    console.log(event.target.href);
  }

}
