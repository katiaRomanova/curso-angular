import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnChanges {
  @Input() errores: any;
  erroresApintar: Array<string> = [];

  constructor() { }

  ngOnChanges(): void {

    this.erroresApintar = [];
    //for of funciona con for of ccede a los valores,
    //for in accede a los keys de objetos,
    for (let errorKey in this.errores) {
      switch (errorKey) {
        case 'required':
          this.erroresApintar.push(`El campo es obligatorio`);
          break;

        case 'pattern':
          this.erroresApintar.push(`No cumple con la expresión regular`);
          break;
        
        case 'minlength':
          this.erroresApintar.push(`El campo necesita ${this.errores[errorKey].requiredLength}.
          Te faltan ${this.errores[errorKey].requiredLength - this.errores[errorKey].actualLength} caracteres`);
          break;
        case 'esStark':
          this.erroresApintar.push(`El usuario no es un Stark`);
          break;
      }

    }
  }

}
