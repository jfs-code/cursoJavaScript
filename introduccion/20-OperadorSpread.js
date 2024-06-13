/*
Operador Spread 
Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/

const frutas = ['Mango', 'Piña', 'Fresa'];
const comidaFavorita = ['Pizza', 'Sushi', 'Seviche', 'Arroz paisa', ...frutas];
console.log(comidaFavorita);

const datosLogin = {
    correo: 'jfsldana001@gmail.com',
    password: '123',
};

const usuario = {
    nombre: 'Jaime',
    edad: 52,
    ...datosLogin,
    amigos: ['Perla', 'Valeria', 'Gustavo'],
    saludo: () => {
        console.log('Hola ');
    },
    pais: 'Colombia',
};

console.log(usuario);

/*
Paramero Rest
Permite que una funcion contenga un numero indefinido de argumentos.
Los argumentos extra que encuentre los convertira en un arreglo.
*/

const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales);
};

registrarUsuario('Jaime', 'jfsaldana001@gmail.com', 28, 'Colombia');
console.log();

/*
Destructuración de objetos
Nos permite obtener elementos o propiedades de un arreglo u objeto y 
guardarlos en una variable.
*/

const amigos = ['Perla', 'Valeria', 'Gustavo'];
// const primerAmigo = amigos[0];
// const primerAmigo = amigos[1];

const [primerAmigo, segundoAmigo, tercerAmigo] =amigos;

console.log(primerAmigo);

const {nombre, pais} = usuario;
console.log(nombre, ' ' ,pais);

// Se crea una funcion flecha que recibe un objeto destructurado donde se coloca
// los parametros que se quiere visualizar y listo
const mostrarEdad = ({nombre, edad}) => {
    console.log(`${nombre} tiene ${edad}`);
};

mostrarEdad(usuario);

