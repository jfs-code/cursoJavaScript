class Usuario {
    tipo = 'usuario';
    
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;

        console.log('Nuevo usuario registrado!');
    }

    static borrar(id_usuario){
        // if(this.permisos.includes('borrar')){
            console.log(`El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`);
        // }
        // else{
        //     console.log(`No tienes los permisos para borrar post`);
        // }
    }
}

// const usuario = new Usuario('Jaime', 'jfsaldana001@gmail.com');
// console.log(usuario);
Usuario.borrar(1);