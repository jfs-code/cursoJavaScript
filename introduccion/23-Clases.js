/*
Estructura de una clase:
Definición
- La clase contiene propiedades
- La clase contiene un método especial para inicializar un objeto creado a partir
de esta, se llama constructor
- La clase puede contener funciones, estas las llamaremos métodos.
*/

class Usuario {
    // tipo = 'usuario';
    
    constructor(nombre, apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;

        // console.log('Nuevo usuario registrado!');
    }

    // obtenernombreCompleto(){
    //     console.log('Obteniendo datos...');
    //     return `${this.nombre} ${this.apellidos}`;
    // }

    saludar() {
        console.log(`Hola, Soy ${this.nombre} ${this.apellidos}`);
    }
}

// const usuario = new Usuario('Jaime', 'Florez Saldaña');
// // console.log(usuario);
// console.log(usuario.obtenernombreCompleto());

module.exports = Usuario;

