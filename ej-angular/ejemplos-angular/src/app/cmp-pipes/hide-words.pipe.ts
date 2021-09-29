import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {

//{{'hola mundo cruel' | hideWords: ['hola', 'cruel']}} => **** mundo *****

  transform(value: string, ...args: any[]): string {

    let newFrase = value;
    let arrayWords: Array<string> = args[0];

    //buscamos el inicio de palabra
    arrayWords.forEach(element => {
     
      //g - para cambiar todas apariciones,
      //i - para ignorar upper y lowercase,
      newFrase = newFrase.replace(new RegExp(element, 'gi'), '*'.repeat(element.length));
      
      //de momento no funciona bien, porque vendrá en es2021 (cambiar en tsconfig.json):
      //newFrase = newFrase.replaceAll(element, '*'.repeat(element.length));

    }); 
      
    console.log(newFrase);

    return newFrase;
  }
}
