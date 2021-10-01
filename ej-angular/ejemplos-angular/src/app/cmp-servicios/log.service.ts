import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  info(msg: string){
    console.info(`[INFO] ${new Date()} : ${msg}`);
  }

  error(msg: string){
    console.error(`[ERROR] ${new Date()} : ${msg}`);
  }
}
