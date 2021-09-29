import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() title: string = 'Really Good Emails 2.0';
  @Input() img: string = 'https://ph-files.imgix.net/215bebf2-d303-4d09-ba47-251553241d02.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop&dpr=2';
  @Input() text: string = 'Really good curated email design and code inspiration';
  //alt = '';

  constructor() { }

  ngOnInit(): void {
    //this.alt = `Imagen de $´{title}`
  }

}
