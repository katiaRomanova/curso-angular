
export class Tarea {

    // para no declarar primero variables, 
    // y luego asignarles valores en constructor,
    // se puede hacer así,
    constructor(
        public titulo: string, 
        public completada: boolean, 
        public autor: string,
        public id: string | null = null) {}
}