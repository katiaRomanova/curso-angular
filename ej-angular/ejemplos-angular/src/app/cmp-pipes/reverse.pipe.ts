import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})

export class ReversePipe implements PipeTransform {

  //{{'hola mundo' | reverse}} => odnum aloh
  transform(value: string): string {

    return value.split("").reverse().join("");

    //la segunda opción,
    let reverse = '';
    for (let i = value.length-1; i >= 0; i--) {
      reverse += value[i];      
    }
  }

}


