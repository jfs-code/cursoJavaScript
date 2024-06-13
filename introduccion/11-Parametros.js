//Parametros: Los valores especificos en la definición
//Argumentos: los valores que le pasamos a la función cuando la invocamos
// const saludo = (nombre = amigo) => {
//     console.log(`Hola ${nombre}`);
// };

// saludo('Jaime');
// saludo('Evelin');
// saludo('Perla');
// saludo('');

/*
Funcciones con multiples parametros
*/

const operacion = (operacion, number1, number2) => {
    switch(operacion){
        case 'suma':
            console.log(`El tipo de operación es ${operacion} de los siguientes valores ${number1}, ${number2}, y  el resultado es ${number1 + number2}`);
            break;
        case 'resta':
            console.log(`El tipo de operación es ${operacion} de los siguientes valores ${number1}, ${number2}, y  el resultado es ${number1 - number2}`);
            break;
        default: 
            console.log(`El tipo de operación no es válido`);
    }
};

operacion('suma', 2000, 125);
operacion('resta', 56, 123);
operacion();