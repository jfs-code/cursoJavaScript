const nombres = ['Arturo', 'Andres', 'Alejandro', 'Roberto','Adrian','Antonio','Angel'];

for (let index = 0; index < nombres.length; index++) {
    if(nombres[index][0] !== 'A'){
        console.log('Alto no hay un nombre que no empieza por la letra A'); 
        console.log(nombres[index] + ' no empieza por la letra A');
        break;
    }
    console.log(nombres[index]);    
}


const invitados = ['Carlos', 'Christian', 'Christofer', 'Jorge','Estaefania','Erika','Manuel'];

console.log('Lista de personas Invitadas:');
for (let index = 0; index < invitados.length; index++) {
    if(invitados[index] === 'Jorge'){
        continue;
    }
    console.log(invitados[index]);    
}