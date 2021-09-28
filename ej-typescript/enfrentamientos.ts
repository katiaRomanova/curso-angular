//import _ from 'underscore'; para ecma6, y en package.json añadir type:module
//const _ = require('underscore');

//const equipos = ['R. Madrid' , 'Barcelona', 'Valencia', 'Villarreal']
const equipos = ['R. Madrid', 'Barcelona', 'Valencia', 'Villarreal', 'Sevilla']

//ejecutamos la función,
//getEnfrentamientos(equipos);

//rest params
//desestructuracion
//funcion recursiva

//function getEnfrentamientos(equipos: Array<string>): void {

    //mezclamos el array de equipos,
    shuffleArray(equipos);

    let getEnfrentamientos = (equipos: Array<string>) => {

        //el caso cuando queda solo un equipo,
        if (equipos.length == 1) {
            return `${equipos[0]} pasa la siguiente ronda`;
        }
        //cuando hay solo dos equipos,
        else if (equipos.length == 2) {
            return `${equipos[0]} vs ${equipos[1]}`
        }

        //el resto de los casos,
        else {

            const [equipo1, equipo2, ...newEquipos] = equipos;

            console.log(`${equipo1} vs ${equipo2}`);

            return getEnfrentamientos(newEquipos);
        }
    };

    console.log(getEnfrentamientos(equipos));
//}

//función que mezcla el contenido de un array,
function shuffleArray(array: Array<string>): void {

    //para ordenar aleatoriamente,
    array.sort(function () {
        return Math.random() - 0.5;
    });

    console.log(equipos);
}