/*
prueba inicial
describe('fizzbuzz', () => {
    test('test', () => {
        expect(true).toBe(true);
    });
});
*/

/**/
const fizzbuzz = require('./fizzbuzz');
// import fizzbuzz from './fizzbuzz';

describe('fizzbuzz', () => {
    //Estos serían los casos de uso
    test('Deben imprimir un mensaje de error si no recibe un numero', () => {
        const expected = "Error: El argumento debe ser un número"; //lo que esperamos
        const result = fizzbuzz('16'); //cual es el resultado de la operación
        expect(expected).toBe(result); //la comprobación del test es correcto
    });

    test('Deben imprimir un mensaje de error si recibe un numero negativo', () => {
        const expected = "Error: El argumento debe ser un número mayor de cero"; //lo que esperamos
        const result = fizzbuzz(-1); //cual es el resultado de la operación
        expect(expected).toBe(result); //la comprobación del test es correcto
    });

    test('Deben imprimir 1 si reciben 1', () => {
        const expected = 1; //lo que esperamos
        const result = fizzbuzz(1); //cual es el resultado de la operación
        expect(expected).toBe(result); //la comprobación del test es correcto
    });

    test('Deben imprimir fizz si reciben 3', () => {
        const expected = 'fizz'; //lo que esperamos
        const result = fizzbuzz(3); //cual es el resultado de la operación
        expect(expected).toBe(result); //la comprobación del test es correcto
    });
    
    test('Deben imprimir fizz si reciben multiplos de 3', () => {
        const expected = 'fizz'; //lo que esperamos
        const result = fizzbuzz(6); //cual es el resultado de la operación
        expect(expected).toBe(result); //la comprobación del test es correcto
    });

    test('Deben imprimir buzz si reciben 5', () => {
        const expected = 'buzz'; //lo que esperamos
        const result = fizzbuzz(5); //cual es el resultado de la operación
        expect(expected).toBe(result); //la comprobación del test es correcto
    });

    test('Deben imprimir buzz si reciben multiplos de 5', () => {
        const expected = 'buzz'; //lo que esperamos
        const result = fizzbuzz(10); //cual es el resultado de la operación
        expect(expected).toBe(result); //la comprobación del test es correcto
    });

    test('Deben imprimir fizzbuzz si reciben multiplos de 3 y de 5 ', () => {
        const expected = 'fizzbuzz'; //lo que esperamos
        const result = fizzbuzz(15); //cual es el resultado de la operación
        expect(expected).toBe(result); //la comprobación del test es correcto
    });
});
