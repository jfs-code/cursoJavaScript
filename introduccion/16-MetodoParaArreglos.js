const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
/*
.length
(propiedad) - nos permite conocer la cantidad de elementos de un arreglo
*/

console.log(colores.length);
/*
.toString()
Nos permite transformar un arreglo a una cadena de texto.
Poe ejemplo para poder mostrarlo en el navegador
*/
document.body.innerHTML = colores.toString();
console.log(colores.toString());

/*
.join()
Nos permite transformar un arreglo a una cadena de texto y separar cada elemento.

*/

console.log(colores.join(' - '));

/*
.sort()
Nos permite ordenar un arreglo de cadena de texto, de forma alfabetica.

*/
const numeros = [6, 9, 2, 7, 1];
console.log(colores.sort());
console.log(numeros.sort());

/*
.reverse()
Nos permite ordenar un arreglo de cadena de texto, de forma alfabetica desde z hasta la a.

*/

console.log(colores.reverse());
console.log(numeros.reverse());


/*
.concat()
Nos permite juntar dos arreglos en uno solo

*/
const arreglo1 = [6, 9, 2, 7, 1];
const arreglo2 = ['c','d','a','b'];
const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3);
console.log(arreglo3.sort());

/*
.push()
Nos permite agregar un elemento al final del arreglo

*/

colores.push('Naranja');
console.log(colores);

/*
.pop()
Nos permite eliminar el ultimo elemento del arreglo

*/

colores.pop();
console.log(colores);

/*
.shift()
Nos permite eliminar el primer elemento del arreglo

*/

colores.shift();
console.log(colores);

/*
.unshift()
Nos permite agregar un elemento en el inicio del arreglo

*/

colores.unshift('Cafe');
console.log(colores);

/*
.splice()
Nos permite insertar elementos en un arreglo donde lo especifiquemos
1er parametro - posición donde queremos comenzar a insetar los elementos
2do parametro - si queremos eliminar elementos del arreglo desde la posicion indicada
resto de parametros . los elementos a insertar
*/
const frutas = ['Mango', 'Piña', 'Fresa'];
console.log(frutas);
frutas.splice(1,2,'Mora', 'Franguesa');
console.log(frutas);

/*
.slice()
Nos permite copiar una parte de un arreglo a otro
1er parametro - posición desde donde queremos copiar
2do parametro - hasta antes de que elemento copiar
*/

const piedras = ['Quarzo', 'Diamante', 'Ruby', 'Esmeralda'];
const piedrasEconomicas = piedras.slice(2,4);
console.log(piedras);
// piedras.splice(1,2,'Mora', 'Franguesa');
console.log(piedrasEconomicas);


/*
.forEach()
Nos permite ejecutar una funcion por cada elemento
*/
const nombres = ['Jaime', 'Evelin', 'Perla', 'Guillermo', 'Valeria', 'Jose', 'Maria', 'Jesus', 45];

nombres.forEach((nombre, index) => {
    console.log(`Hola ${nombre} (${index})`);
});

/*
.find()
Nos permite recorrer un arreglo y devuelve el primer elemento que retornemos
*/

const resultado = nombres.find((nombre) => {
    if(nombre[0] === 'E'){
        return nombre;
    }
});

console.log(resultado);

/*
.map()
Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo
en base a lo resultados de esa funcion
*/
//forma larga
// const nombresMayuscula = nombres.map((nombre) => {
//     return nombre.toUpperCase();
// });

//forma corta
// const nombresMayuscula = nombres.map((nombre) => nombre.toUpperCase());

// console.log(nombresMayuscula);


/*
.filter()
Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo
en base a lo resultados de esa funcion
aqui solo devuelve los resultados que cumpla una condición
*/

const nombres4Letras = nombres.filter((nombre) => {
    if(nombre.length === 5){
        return nombre;
    }    
});


console.log(nombres4Letras);


/*
.include()
Nos permite saber si el arreglo contiene un elemento especifico
*/

console.log(nombres.includes('Jaime'));


/*
.every()
Nos permite ejeutar un condicional sobre cada elemento y
nos devuelve true si todos los elementos cumplieron la condicion
*/

const nombresValidos = nombres.every((nombre) => {
    
    if(typeof nombre === 'string'){
        return true;
    }else{
        return false;
    }  
});

console.log('¿Todos los elementos son validos? ',nombresValidos);

/*
.some()
Nos permite ejeutar un condicional sobre cada elemento y
nos devuelve true si algun elemento cumple la condicion
*/

const nombresValidos2 = nombres.some((nombre) => {
    
    if(typeof nombre !== 'string'){
        return true;
    }else{
        return false;
    }  
});
//true si hay algun valor invalido
//false si no hay algun valor invalido

console.log('¿El arreglo es invalido? ',nombresValidos2);