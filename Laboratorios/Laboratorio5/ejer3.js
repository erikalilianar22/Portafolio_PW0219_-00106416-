/*Realice una función en JS, que dados un número y un arreglo como parámetros, retorne cuantas ocurrencias existen de ese número dentro del arreglo. */

var arre=[1,1,1,2,3,4,4,4,4,5,6,7,7,7,7,7,,8,9,9,9,9,9,9,10];

var funcion = x => {
    let ocurrencias=0;
    let num;

for( let i=0; i<arre.length;i++){
    if(arre[i]==x){
        ocurrencias++;
    }
}
    console.log("el numero se repite "+ ocurrencias+" veces");
}
funcion(9);