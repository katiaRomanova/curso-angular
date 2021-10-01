import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  //convertimos pipe en inpuro
  //se ejecuta cada vez cuando pasan cambios 
  //en la página (no solo que necesitamos, todos),
  //cada vez cuando pinta página,
  //no es la mejor manera.
  //pure: false
})

export class FiltroPipe implements PipeTransform {

  transform(colores: Array<string>, filtro: string): Array<string> {
    console.log('pasa por el pipe');
   return colores.filter(color => {
      return color.toLowerCase().includes(filtro.toLowerCase());
    })
  }

}
