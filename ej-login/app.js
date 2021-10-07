
const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const jwt = require('jsonwebtoken');

const usuariosRegistrados = [
    {
        id: 1, username: 'falco', password: '1234', rol: 'ADMIN',
        nombreCompleto: 'Charles Falco'
    },
    {
        id: 2, username: 'blake', password: '1234', rol: 'PREMIUM',
        nombreCompleto: 'Octavia Blake'
    }
];

const getSecret = () => {
    return fs.readFile('./secret.txt')
        .then(data => data.toString())
}

//creamos un servidor express
const app = express();

app.use(cors({
    //una lista de dominios que tienen permiso
    //de acceder a los datos,
    origin: ['http://localhost:4200'],
    //comprobar cabeceras,
    //allowedHeaders: [],
    //añadir que metodos permitimos,
    //methods: 'GET'
}));

//decimos que se usa middleware,
//para que datos que reciba van a convertidos, 
//en formato json,
//content-type: application/json
//inicializamos req.body
app.use(express.json());

//el orden de ejecución es el mismo como,
//van funciones:

//cuando se hace petición get al inicio de app
//mostramos url y metos en console
//como respuesta devolvemos objeto ok: true,
app.get('/', (req, res, next) => {
    console.log(req.url, req.method);
    res.json({ ok: true })
});


app.post('/register', (req, res, next) => {

    const { usuario, nombre, apellidos, password } = req.body;
    const pos = usuariosRegistrados[usuariosRegistrados.length - 1].id + 1;

    const usuarioAGuardar = {
        id: pos,
        nombreCompleto: `${nombre} ${apellidos}`,
        rol: 'FREE',
        username: usuario,
        password: password
    }

    //añadimos un usuario nuevo en array de usuarios registrados,
    usuariosRegistrados.push(usuarioAGuardar);

    //hacemos una copia de usuario recien creado,
    const user = { ...usuarioAGuardar};
    //eliminamos datos del password
    delete user.password;

    //y envimos datos al cliente:
    return res.status(201).json(user);
})

//next necesita para ejecutar siguientes peticiones

app.post('/login', (req, res, next) => {
    console.log(req.body);

    const { usuario, password } = req.body;

    const usuarioRegistrado = usuariosRegistrados.find(u => {
        return u.username === usuario
            && u.password === password
    });

    if (!usuarioRegistrado) {
        return res.status(403).json({ msg: "El usuario/contraseña no es válido" });
    }

    getSecret()
        .then(
            palabraSecreta => {
                const token = jwt.sign({
                    //es payload:
                    rol: usuarioRegistrado.rol,
                    nombreCompleto: usuarioRegistrado.nombreCompleto,
                    username: usuarioRegistrado.username
                }, palabraSecreta);

                return res.status(200).json({ token: token });
            });

    //otra versión de lo mismo:
    /* 
        fs.readFile('./secret.txt')
            .then(data => {
                const palabraSecreta = data.toString();
    
                //es una promesa, lo metemos dentro del then para 
                //que no se ejecuta antes de que se acabará leer,
                //el archivo 'secret.txt' y obtendrá la palabra secreta,
                const token = jwt.sign({
                    //es payload:
                    rol: usuarioRegistrado.rol,
                    nombreCompleto: usuarioRegistrado.nombreCompleto,
                    username: usuarioRegistrado.username
                }, palabraSecreta);
    
                return res.status(200).json({ token: token });
            });
        */
});


//va a encargar a comprobar el token recibido,
//para no repetir código,
app.use((req, res, next) => {

    const auth = req.headers.authorization;
    //console.log(auth);

    if (!auth) {
        return res.status(400).json({ msg: 'Necesitas la cabecera Authorization' })
    }

    //Bearer asfhgdf.asjahd.adjashd
    //bearer = Bearer
    const [bearer, jwtStr] = auth.split(' ');

    getSecret()
        .then(secret => {

            try {
                const payload = jwt.verify(jwtStr, secret);
                console.log(payload);

                //si no peta nada ejecutamos la petición siguiente,
                next();
                //en el caso de algún error:
            } catch (error) {
                res.status(401).json({ err: 'Token invalido' });
            }
        })
})

app.get('/datos', (req, res, next) => {
    return res.status(200).json({ msg: 'datos' })
})

/* app.post('/datos', (req, res, next) => {
 
}) */

//decimos que escucha puerta 3005:
app.listen(3005, () => {
    console.log('Listening on http://localhost:3005');
})

