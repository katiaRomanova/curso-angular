// Valores primitivos (string, number, boolean)

//JS crea dos referencias distintas,
let a = 'A';
let b = a;
b += '!';

console.log(a, b); //A, A!

//Valores por referencia (array, objetos, funciones)
let colores = ['blue', 'red'];
let colores2 = colores;

//no se crea una instancia nueva de array,
colores2.push('orange');

let colores3 = [...colores, 'black'];
let colores4 = colores.slice();
colores4.push('green');

console.log(colores, colores2, colores3, colores4); 
//[ 'blue', 'red', 'orange' ], [ 'blue', 'red', 'orange' ], 
//[ 'blue', 'red', 'black' ], [ 'blue', 'red', 'green' ]

let jason = {
    nombre: 'Jason',
    apellido: 'Statham'
}

let yamel = jason;
yamel.nombre = 'YML';

let yamel2 = {...jason, nombre: 'YAMEL'};

//forma antigua,
let yamel3 = Object.assign({}, jason, {nombre: 'YaML'});

console.log(jason, yamel, yamel2, yamel3);