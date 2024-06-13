const operacion = (operacion, number1, number2) => {
    if(operacion === 'suma')
        return number1 + number2;
    if(operacion === 'resta')
        return number1 - number2;
};

const miVariable = operacion('suma', 500, 20);
console.log(miVariable);