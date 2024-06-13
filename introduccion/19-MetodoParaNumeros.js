/*
.tostring() - Devuelve el numero como caracter
*/
const numero = 10;
console.log(numero, typeof numero);

const texto = numero.toString();
console.log(texto, typeof texto);

/*
.toFixed() - transforma un valor a un entero
*/
const PI = 3.1416;
console.log(PI.toFixed(10));

/*
parseInt - transforma un valor a un entero
*/
// const numero1 = parseInt(prompt('Ingrese un número:'));
// const numero2 = parseInt(prompt('Ingrese un número:'));
// console.log(numero1 + numero2);

/*
parseFloat - transforma un valor a un numero con decimales
*/
// const numero3 = parseFloat(prompt('Ingrese un número:'));
// const numero4 = parseFloat(prompt('Ingrese un número:'));
// console.log(numero3 + numero4);

/*
Math.random() - genera un numero al azar entre 0 y 1
*/
const numero5 = Math.random();
console.log('este es el numero: '+numero5);

/*
Math.floor() - redondea hacia abajo un numero
*/
console.log(Math.floor('10.1'));
console.log(Math.floor('10.99'));

/*
Math.ceil() - redondea hacia arriba un numero
*/
console.log(Math.ceil('12.1'));
console.log(Math.ceil('12.99'));

/*
Math.round() - redondea hacia el centro mas cercano
*/
console.log(Math.round('7.1'));
console.log(Math.round('7.99'));

/*
Numero al azar de 0 a 100
*/
const numero6 = Math.random();
console.log('Numero al azar de 0 a 100: ' + Math.round(numero6 * 101));


