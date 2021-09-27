"use strict";
exports.__esModule = true;
var validaciones_1 = require("./validaciones");
//si se usa expotr default no hay que poner llaves:
var mascota_1 = require("./mascota");
var Validaciones = require("./validaciones");
console.log(Validaciones.esTodoMayusculas('abn'));
console.log(Validaciones.esUnNumber('123'));
//utilizar alias para función que se importa si hay una con el mismo nombre,
function esTodoMayusculas() {
}
console.log((0, validaciones_1.esUnNumber)('abc'));
console.log((0, validaciones_1.esTodoMayusculas)('ABC'));
var felix = new mascota_1["default"]('Felix');
console.log(felix.tipo);
