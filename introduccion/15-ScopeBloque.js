/*
Block Scope / alcance de tipo bloque
- son las variables declaradas dentro de un bloque de tipo const o let
- solo podemos acceder a ellas desde dentro del bloque

*/
const edad = 52;
if(edad >= 18){
    const accesoPermitido = true;
    console.log(accesoPermitido);
}
