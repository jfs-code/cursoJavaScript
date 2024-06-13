const Usuario = require('./../introduccion/32-ClasesPrueba.js'); 

const { saludar, PI, hello, sumar, restar } = require('./../introduccion/31-FuncionesYVariables.js');


const usuario = new Usuario('Evelin', 'Gongora Andrade');
usuario.saludar();


console.log(PI);
hello();
console.log(sumar(8,4));
console.log(restar(10,5));