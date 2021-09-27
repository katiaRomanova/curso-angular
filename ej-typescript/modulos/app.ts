import { esUnNumber, esTodoMayusculas as esMayus } from './validaciones';

//si se usa expotr default no hay que poner llaves:
import M from './mascota'; 

import * as Validaciones from './validaciones';

console.log(Validaciones.esTodoMayusculas('abn'));
console.log(Validaciones.esUnNumber('123'));

//utilizar alias para función que se importa si hay una con el mismo nombre,
function esTodoMayusculas(){

}

console.log(esUnNumber('abc'));
console.log(esMayus('ABC'));

let felix = new M('Felix');
console.log(felix.tipo);
