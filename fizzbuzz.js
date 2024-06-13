function fizzbuzz(num){    

    const calculaMultiplo = (divisor, numero) => numero % divisor === 0;

    if(typeof num !== "number"){
        return "Error: El argumento debe ser un número";
    }

    if(num < 0){
        return "Error: El argumento debe ser un número mayor de cero";
    }

    if(num === 0){
        return 0;
    }
    
    if(calculaMultiplo(3, num) && calculaMultiplo(5, num)){
        return 'fizzbuzz';
    }

    if(calculaMultiplo(3, num)){
        return 'fizz';
    }

    if(calculaMultiplo(5, num)){
        return 'buzz';
    }
    return num;
}

function print(num){
    for (let index = 0; index < num; index++) {
        console.log(`${index}: ${fizzbuzz(index)}`);         
    }
}

print(16);

module.exports = fizzbuzz;