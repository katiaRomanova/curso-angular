var a: number = 1;
a = 2;
console.log(a);

const NUM_MAX = 4;
//NUM_MAX = 8;

let b = 'Hola mundo';
b += '!!!!';



function differenciaVarLet() {
    var z = 1;
    let y = 1;

    if (true) {
        var z = 2;
        let y = 2;
        console.log(z, y);
    }

    console.log(z, y);
}

differenciaVarLet();

type miTipo = number | string;

//para aceptar varios tipos de datos,
let telefono: number | string = 677889912;

let telefonoString: miTipo = '677889912';

//any, []number, Array<string>, void, boolean

let arrayDeNumberString: Array<number | string> = [1, '2', '4', 89];

interface Serie {
    titulo: string,
    numTemporadas: number,
    finalizada: boolean
}

const serie: Serie = {
    titulo: 'La-la-lend',
    numTemporadas: 10,
    finalizada: false,
    descripcion: 'algo que decir ...'
}


interface Serie {
    descripcion: string
}

interface Persona {
    nombre: string,
    apellidos: string
}

interface Actor extends Persona {
    peliculasEnLasQueSale: Array<string>
}

const jasonStatham: Actor = {
    nombre: 'Jason',
    apellidos: 'Statham',
    peliculasEnLasQueSale: ['Los mercanarios', 'Transporter']
}

function muestraDataSerie(serie: Serie): void {
    const { titulo, numTemporadas: nTemporadas, finalizada } = serie;

    /* console.log('la serie ' + serie.titulo + ' tiene ' +  serie.numTemporadas + 
     ' temporadas, y ' + (serie.finalizada ? 'ha finalizada' : 'no ha finalizado todavía')); 
 
     console.log('La serie ' + titulo + ' tiene ' +  nTemporadas + 
     ' temporadas, y ' + (finalizada ? 'ha finalizada' : 'no ha finalizado todavía'));*/

    console.log(`La serie ${titulo} tiene ${nTemporadas} temporadas, y  ${finalizada ? 'ha finalizada' : 'no ha finalizado todavía'}`);
}

muestraDataSerie(serie);

function getNumLoteria(numSorteo: number, ...numeros: Array<number>): string {

    const sorteos = {
        1: 'Bonoloto',
        2: 'Primitiva',
        3: 'Euromillón'
    }

    return `Los números para el sorteo ${sorteos[numSorteo]} son: ${numeros.join(', ')}`
}

const numbers = getNumLoteria(2, 34, 87, 78, 1, 90);
console.log(numbers);

const frutas: Array<string> = ['Piña', 'Naranja', 'Sandía', 'Manzana'];
//para clonar objetos,
const nuevasFrutas = ['Kiwi', ...frutas];

console.log(nuevasFrutas);

const [kiwi, piña, ...restaFrutas] = nuevasFrutas;
console.log(restaFrutas);


//const yameStatham = jasonStatham;

const yameStatham = { ... jasonStatham, nombre: 'YAML'}
//yameStatham.nombre = 'YAML';

console.log(jasonStatham, yameStatham);