
class Usuario {
    
    constructor(nombre, apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    saludar() {
        console.log(`Hola, Soy ${this.nombre} ${this.apellidos}`);
    }
}

module.exports = Usuario;

