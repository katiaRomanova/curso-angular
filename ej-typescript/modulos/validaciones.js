"use strict";
exports.__esModule = true;
exports.esUnNumber = exports.esTodoMayusculas = void 0;
function esUnNumber(texto) {
    var regExp = new RegExp('\\d+', 'g');
    return regExp.test(texto);
}
exports.esUnNumber = esUnNumber;
function esTodoMayusculas(texto) {
    return texto === texto.toUpperCase();
}
exports.esTodoMayusculas = esTodoMayusculas;
var A = true;
