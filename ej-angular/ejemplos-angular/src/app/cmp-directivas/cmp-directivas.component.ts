import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  underline = 'line-through';
  colorLetra = 'orange';
  pintaElFondo = true;
  darkMode = true;

  animales = [
    'perro', 'gato', 'canario', 'tortuga'
  ]

  animales2 = [
    { id: 1, tipo: 'perro' },
    { id: 2, tipo: 'gato' },
    { id: 3, tipo: 'canario' },
    { id: 4, tipo: 'tortuga' }
  ]

  animales3 = [
    { id: 1, tipo: 'perro' },
    { id: 2, tipo: 'gato' }
  ]

  colores = [
    'orange', 'blue', 'red'
  ]

  filtraColor = '';

  coloresSimbolo = [
    'orange', 'blue', 'red', 'yellow', 'grey', 'pink', 'brown', 'violet'
  ]

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.animales3 =
        [
          { id: 1, tipo: 'canario' },
          { id: 2, tipo: 'gato' }
        ]
    }, 8000);
  }

  addColor(event: any) {
    //push guarda valor en la misma instancia de array 
    //this.colores.push(event.target.value);
    //guargamos un valor nuevo en una nueva instancia de array
    //para que se detecta cambios pipe,
    this.colores = [... this.colores, event.target.value];
  }

  activaDarkMode() {
    this.darkMode = true;
  }

  activaLightMode() {
    this.darkMode = false;
  }


  toggleFondo() {
    this.pintaElFondo = !this.pintaElFondo;
  }

  getStyles() {
    return {
      textDecoration: 'underline',
      color: this.colorLetra

    }
  }

  getClases() {
    return {
      letraRoja: true,
      fondoAmarillo: this.pintaElFondo
    }
  }

  trackByAnimales(index: number, animal: string) {
    //console.log(animal);
    return index;
  }

  trackByAnimales2(index: number, animal: any) {
    //console.log(animal.id);
    return animal.id;
  }

  trackById(index: number, animal: any): number {
    return animal.id;
  }
}
