class Usuario {
    tipo = 'usuario';
    
    constructor(usuario, password){
        this.usuario = usuario;
        this.password = password;

        console.log('Nuevo usuario registrado!');
    }

    obtenerPosts(){
        const posts = ['post1', 'post2'];
        return posts;
    }
}


class Moderador extends Usuario {
    constructor(usuario, password, permisos){
        super(usuario, password);
        this.permisos = permisos;
    }

    borrarPost(id){
        if(this.permisos.includes('borrar')){
            console.log(`El post con el ${id} ha sido borrado`);
        }else{
            console.log(`No tienes los permisos para borrar post`);
        }
    }
}

const usuario = new Usuario('Jaime', '12345');
console.log(usuario.obtenerPosts());

const usuario2 = new Moderador('Evelin', '98765',['borrar', 'editar']);
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
usuario2.borrarPost(7);
