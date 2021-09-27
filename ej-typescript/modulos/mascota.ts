//export default Mascota; 
// se puede hacer export delante de la clase,

class Mascota {

    nombre: string;
    tipo: string;

    constructor(nombre: string, tipo: string = 'gato') {
        this.nombre = nombre;
        this.tipo = tipo;
    }
}

let roky = new Mascota('Roky', 'perro');

//si vamos a exportar solo una cosa,
export default Mascota;