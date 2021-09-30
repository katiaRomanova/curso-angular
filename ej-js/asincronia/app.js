//js es un lenguaje asíncrono

//CALLBACKS

/* let getContenido = (err, contenido) => {
    console.log(contenido.toString());
}

/* fs.readFile('texto1.txt', getContenido);
fs.readFile('texto2.txt', getContenido);
fs.readFile('texto3.txt', getContenido); */

/* fs.readFile('texto1.txt', (err, contenido) => {
    console.log(contenido.toString());

    fs.readFile('texto2.txt', (err, contenido) => {
        console.log(contenido.toString());
    
        fs.readFile('texto3.txt', (err, contenido) => {
            console.log(contenido.toString());
        })
    })
}) */

const fs = require('fs').promises;

//PROMISES 
/* 
fs.readFile('texto1.txt')
    .then((contenido) => {
        console.log(contenido.toString());
        return fs.readFile('texto2.txt');
    })
    .then((contenido) => {
        console.log(contenido.toString());
        return fs.readFile('texto3.txt');
    })
    .then((contenido) => {
        console.log(contenido.toString());
    }) 
 */
//ASYNC/AWAIT

async function a() {//await: esperar mmientras no se acabará la instrucción indicada
    const contenido1 = await fs.readFile('texto1.txt');
    console.log(contenido1.toString());

    const contenido2 = await fs.readFile('texto2.txt');
    console.log(contenido2.toString());

    const contenido3 = await fs.readFile('texto3.txt');
    console.log(contenido3.toString());
}

a();

/*   //const a = async() => {
      const resp = await axios.get('http://...');
  }
  b();
  */