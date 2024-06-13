const usuario = {
    nombre: 'Jaime',
    edad: 52,
    amigos: ['Perla', 'Valeria', 'Gustavo'],
    saludo: () => {
        console.log('Hola ')
    },
};

/*
Metodos propios
Los objetos pueden tener metodos personalizados
*/
usuario.saludo();

/*
Object.keys()
Nos devuelve un arreglo con las llaves(propiedades) del objeto
*/

const resultado = Object.keys(usuario);
console.log(resultado);

/*
Object.values()
Nos devuelve un arreglo con los valores del objeto
*/

const resultado1 = Object.values(usuario);
console.log(resultado1);

/*
Object.entries()
Nos devuelve un arreglo con los valores y propiedades(keys) del objeto
*/

const resultado2 = Object.entries(usuario);
console.log(resultado2);
console.log(`El objeto tiene ${resultado2.length} propiedades`);