import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {

  nombre: string = '';
  print: string = 'Katia';
  deshabilitado: boolean = true;
  blue: string = 'red';

  persona = {
    nombre: 'Robb',
    apellidos: 'Stark'
  }

  propiedad: number = 1290;

  constructor() { }

  ngOnInit(): void {
  }

  getSaludo(nombre: string): string {
    return `Bienvenid@ ${nombre}`
  }

  muestraMensaje(msg: string, event: any): void {
    //alert(msg);
    console.log(msg);
    console.log(event.target);
    const element: HTMLElement = event.target;
    element.innerText = 'Otra cosa';
    //event.target.innerText = 'Otra cosa';
    //(event.target as any).innerText = 'Otra cosa';
  }

  getIntroBatman() {
    const nan = (1 - ('wat' as any)) + '';
    return new Array(16).join(nan) + '  Batman';
  }

  canta() {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(this.getIntroBatman());
    synth.speak(utterance);
  }

  resetearData(): void {
    this.print = '';
  }

  saveInput(event: any): void{
    console.log(event);
    console.dir(event.target)
    this.propiedad = event.target.value;
  }
}
