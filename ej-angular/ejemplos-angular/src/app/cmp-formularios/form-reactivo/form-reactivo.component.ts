import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      //  username: new FormControl('', [Validators.required, 
      //  this.esStark]),
      username: new FormControl('', [Validators.required,
      this.esStark(['tony', 'rickon', 'araya', 'sansa', 'robb']), this.minLengthNuestro(3)]),
      password: new FormControl('',
        {
          validators: [Validators.required,
          Validators.minLength(5),
          Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')],
          updateOn: 'blur' //valida campo cuando pierda foco
        })
    } /* como segundo parametro se puede añadir,
    en este caso en vez de utilizar control: AbstractControl,
    ponemos FormGroup
    , {validators: []}*/ )
  }

  login() {
    console.log(this.formulario);
  }

  //minLength customizado,
  minLengthNuestro(min: number) {

    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length >= min) {
        return null;
      }
      return {
        minlength: {
          actualLength: control.value.length,
          requiredLength: min
        }
      }
    }
  }

  esStark(usuariosStark: Array<string>) {

    return (control: AbstractControl): ValidationErrors | null => {
      if (usuariosStark.includes(control.value)) {
        return null; // la validación es correcta,
      }
      return {
        esStark: false
      }// la validación es incorrecta,
    }
  }

  //control es input en nuestro caso (de username),
  /*   esStark(control: AbstractControl): ValidationErrors | null {
  
      const usuariosStark = ['tony', 'rickon', 'araya', 'sansa', 'robb'];
  
      if(usuariosStark.includes(control.value) ){
        return null; // la validación es correcta,
      }
      return {
        esStark: false
      }// la validación es incorrecta,
    } */
}
