/*Realice una función que reciba un arreglo de datos numéricos, y muestre la suma de todos los elementos del arreglo y su promedio. */

var arr=[10,9,8,7];

var funcion = x => {
    let suma=0;
    let promedio;

    for( let i=0; i<arr.length; i++){
        suma= arr[i]+suma;
    }
    promedio= suma/prom.length;

    console.log(promedio);
}
funcion(arr);