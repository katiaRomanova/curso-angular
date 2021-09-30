//console.log(this);

function a() {
    console.log(this); //Es el objeto global,
}

//a();

const persona = {
    nombre: 'Katia',
    apellido: 'Romanova',

    //coge this del objeto superior (no de persona),
    getNombreCompleto: () => {
        console.log(this);// es el objeto que se encuentra en el ámbito,
        //superior a esta función,
        return `${this.nombre} ${this.apellido}`;
    },

    getNombreCompleto2: function () {
        console.log(this); //es el objeto que llama a la función,
        return `${this.nombre} ${this.apellido}`;
    },

    getNombreCompleto3: function () {
        //fecha pertenece al objeto persona con this:
        this.fecha = new Date();
        //console.log(this); 

     /*   /*  const muestraFecha = function() {
            console.log(this);
            console.log('Fecha: ', this.fecha);
            console.log('Fecha: ', this.fecha);
        }.bind(this);

        let that = this;
        const muestraFecha = function() {
            console.log(that);
            console.log('Fecha: ', that.fecha);
        } */

        //coge el this de la persona (del objeto superior):
        const muestraFecha = () => {
            console.log(this);
            console.log('Fecha: ', this.fecha);
        } 

        muestraFecha();

        return `${this.nombre} ${this.apellido} ${this.fecha}`;
    }
}
console.log(persona.getNombreCompleto2());

persona.getNombreCompleto2 = persona.getNombreCompleto2.bind({nombre: 'Charly', apellido: 'Falco'});

//console.log(persona.getNombreCompleto());
console.log(persona.getNombreCompleto2());

console.log(persona.getNombreCompleto3());

