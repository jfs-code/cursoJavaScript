// const usuario = {
//     age: 17, 
//     country: 'Colombia',
//     ticket: true,
// };

// if(usuario.age > 17){
//     console.log('El usuario es mayor de edad, puede entrar al concierto');
// }else {
//     console.log('El usuario es menor de edad, No puede entrar al concierto');
// }

// const usuario = {
//     age: 27, 
//     country: 'Colombia',
//     ticket: false,
// };

// if(usuario.age > 17 && usuario.ticket){
//     console.log('El usuario es mayor de edady tiene un ticket');
// }else {
//     console.log('El usuario es menor de edad o No tiene un ticket');
// }


// const usuario = {
//     age: 27, 
//     country: 'Colombia',
//     ticket: false,
// };

// if(usuario.age > 17){
//     if(usuario.ticket){
//         console.log('El usuario es mayor de edad y tiene un ticket');
//     }else{
//         console.log('El usuario es mayor de edad y No tiene un ticket');
//     }    
// }else {
//     console.log('El usuario es menor de edad');
// }

// const usuario = {
//     age: 27, 
//     country: 'Colombia',
//     ticket: false,
// };

// if(usuario.country === 'Colombia'){
//     console.log('El usuario es Colombiano');  
// }else {
//     console.log('El usuario es menor de edad');
// }

const usuario = {
    name: 'Jaime', 
    country: 'nn',
};

const opcion = usuario.country;
switch(opcion){
    case 'Colombia':
        console.log(`El usuario es de ${usuario.country}`);
        break;
    default:
        console.log('El usuario es de es de otro País');
}



