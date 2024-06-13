/*
Global Scope o variables globales
- son las variables declaradas fuera de una función
- podemos acceder a ellas desde cualquier parte del codigo
- podemos usar const, let y var
*/

var nombre = 'Jaime';
console.log(nombre);

const saludo = () => {
    console.log('Hola ' + nombre);

    nombre = 'Evelin';
    console.log('El nuevo nombre es ' + nombre);
};

saludo();