import { Directive,HostBinding, HostListener, Input, } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective {

  @HostBinding('style.backgroundColor') colorFondo = 'white';

  @HostBinding('style.color') colorSimbolo = 'black';

  @HostBinding('style.position') position = 'relative';

  @HostBinding('style.top') positionTop = '0px';

  @HostBinding('style.left') positionLeft = '3px';

  @HostBinding('style.right') positionRight = '0px';

  @Input('appPowerMode') colores: Array<string> = [];

  numRandom: number;

  constructor() { }

  @HostListener('input') onInput() {
    this.numRandom = this.randomNum(0, this.colores.length);
    //console.log('this.numRandom: ' +  this.numRandom);

    this.colorSimbolo = this.colores[this.numRandom];
    this.colorFondo = this.colores[this.randomNum(0, this.colores.length)];
  }

  @HostListener('keyup') onUp() {

    this.positionTop = this.randomNum(0, 11) + 'px';
    this.positionLeft = this.randomNum(0, 4) + 'px';
    this.positionRight = this.randomNum(0, 20) + 'px';
  }

  randomNum(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
