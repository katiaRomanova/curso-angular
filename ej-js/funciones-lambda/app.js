const series = [
    { titulo: 'Game of Thrones', numTemporadas: 10, finalizada: true },
    { titulo: 'The Walking Dead', numTemporadas: 10, finalizada: false },
    { titulo: 'Gangland Undercover', numTemporadas: 3, finalizada: true },
    { titulo: 'The Leftovers', numTemporadas: 3, finalizada: true }
]

//forEach está bien para mostrar datos,
series.forEach((serie, index, arrSeries) => {
    console.log(JSON.stringify(serie, null, 2));
})


//map - para modificar datos de array,
//array (ref) -> object(ref)
const seriesConX = series.map((serie, index, arrSeries) => {
    const serieNueva = { ...serie };

    if (serieNueva.finalizada) {
        serieNueva.titulo = 'x ' + serieNueva.titulo;
    }
    return serieNueva;
})

console.log(seriesConX);
console.log(series);

const numbers = [1, 2, 3, 4]; // array (ref) -> number(primitivos)
const tripleDeNum = numbers.map((n, index, arrNums) => n * 3)

console.log(numbers);
console.log(tripleDeNum);


//filter - para filtrar datos de un array y guardarlos en un array nuevo,
const seriesLargas = series.filter((serie, index, arrSeries) => {
    return serie.numTemporadas > 5;
})

console.log(seriesLargas);
console.log(series);


//find
const primeraSerieFinalizada = series.find((serie, index, arrSeries) =>{
    return serie.finalizada;
    //return serie.numTemporadas === 3;
})
console.log(primeraSerieFinalizada);
console.log(series);


//reduce
const numTemporadasTotal = series.reduce((totalTemporadas, serie, index, arrSeries) => {
    
    console.log(JSON.stringify(totalTemporadas));
    return totalTemporadas += serie.numTemporadas;
}, 0)

console.log(numTemporadasTotal);

const chunks = ['Hola, s', 'oy Kati', 'a Roman', 'va'];
const contenido = chunks.reduce((acc, str) => {
    return acc += str;
}, '');
console.log(contenido);
//console.log(chunks.join(''));

const katiaATrozos = [{nombre: 'Katia'}, {apellido: 'Romanova', email: 'sdhgsfd'}, 
{puesto: 'engineer'}]

const katia = katiaATrozos.reduce((acc, prop) => {
    Object.keys(prop).forEach((key) => {
        acc[key] = prop[key]
    })
    return acc;
}, {})

console.log(katia);
//console.log({...});

//every, some