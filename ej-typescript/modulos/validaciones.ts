function esUnNumber(texto: string) : boolean {

    const regExp = new RegExp('\\d+', 'g');
 
     return regExp.test(texto);
 }
 
 export function esTodoMayusculas(texto: string) : boolean {
     return texto === texto.toUpperCase();
 }

 const A = true;

 //exportación de funciones para que sean accesibles en otros ficheros,
 //cuando hay varias cosas para exportar,
 export {
     esUnNumber,
     //esTodoMayusculas
 }