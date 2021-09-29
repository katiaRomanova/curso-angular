import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {

  transform(value: number, suma?: number, resta?: number): number {
    let res =  value * 2 ;
    
    if(suma) {
      res += suma;
    }

    if(resta) {
      res -= resta;
    }
    
    return res;
  }

}
