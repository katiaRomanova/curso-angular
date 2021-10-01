import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-cmp-servicios',
  templateUrl: './cmp-servicios.component.html',
  styleUrls: ['./cmp-servicios.component.css']
})
export class CmpServiciosComponent implements OnInit {

  constructor(private logservice: LogService) { }

  ngOnInit(): void {
  }

  muestraInfo(msg: string): void {
    this.logservice.info(msg);
  }

  muestraError(msg: string): void {
    this.logservice.error(msg);
  }
}
