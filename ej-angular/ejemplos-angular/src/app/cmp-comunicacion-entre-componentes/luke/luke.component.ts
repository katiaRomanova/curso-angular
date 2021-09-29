import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-luke',
  templateUrl: './luke.component.html',
  styleUrls: ['./luke.component.css']
})
export class LukeComponent implements OnInit {
  @Input() nombre = '';
  @Input() handleChangeNombre = (a: any) => {};

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeNombreLuke(txt: string) : any {
   
    console.log('bb');
      return () => {
        console.log('c', {txt});
        this.handleChangeNombre(txt);
      }
  }

}
