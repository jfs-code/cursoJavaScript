const persona = {
    name: 'Jaime',
    age: 52, 
    email: 'jfsaldana001@gmail.com',
    suscripciones: {
        web: true,
        email: true,
    },
    colorFavorite: ['Rojo', 'Azul'],
    saludo: function(){
        alert('Hola');
    }

};

console.log(persona);//muestra la información de todo el objeto
console.log(persona['age']);//muestra el contenido de la propiedad edad

//aqui definimos una constante con el nombre de una propiedad del objeto
const variable = 'suscripciones';
// de forma dinamica muestra el contenido de la propiedad que se escrita en la variable
console.log(persona[variable]);
//aqui se muestra el contenido de la propiedad email del objeto suscripciones que esta 
//dentro del objeto persona 
console.log(persona[variable].email);

//aqui se crea una nueva propiedad dentro del objeto persona
persona.pais = 'Colombia';
console.log(persona);
//Así ejecutamos una funcionalidad del objeto persona
persona.saludo();