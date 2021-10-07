import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-normal',
  templateUrl: './form-normal.component.html',
  styleUrls: ['./form-normal.component.css']
})
export class FormNormalComponent implements OnInit {

  datosLogin = {
    usuario: 'katia',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(formulario: NgForm) {
    console.log(formulario.value);

    //hacemos el POST para loguearse
  }

}
