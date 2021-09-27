"use strict";
//export default Mascota; 
// se puede hacer export delante de la clase,
exports.__esModule = true;
var Mascota = /** @class */ (function () {
    function Mascota(nombre, tipo) {
        if (tipo === void 0) { tipo = 'gato'; }
        this.nombre = nombre;
        this.tipo = tipo;
    }
    return Mascota;
}());
var roky = new Mascota('Roky', 'perro');
//si vamos a exportar solo una cosa,
exports["default"] = Mascota;
