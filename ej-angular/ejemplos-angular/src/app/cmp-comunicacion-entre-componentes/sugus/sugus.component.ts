import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css']
})
export class SugusComponent implements OnInit {

  //se puede añadir alías cuando vamos a utiliza directivas,
  //@Input('sabor1') sabor: string = 'Limón';
  @Input() sabor: string = 'Limón';
  @Input() color: string = 'yellow';

  constructor() { }

  ngOnInit(): void {

  }

}
