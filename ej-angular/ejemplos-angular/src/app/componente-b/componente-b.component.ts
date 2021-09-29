import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indra-componente-b',
  //no hacerlo así,
  template: `
  <p>Un componente con el template en el archivo de TS</p>
  `,
  styles: [
    `p {
      color: red
    }`
  ]
})
export class ComponenteBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
