/*
Local Scope o variables locales
- son las variables declaradas dentro de una función
- solo podemos acceder a ellas desde dentro de la función

*/

var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} letras`);
}

obtenerNumeroLetras('Jaime');
