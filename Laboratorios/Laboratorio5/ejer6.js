/*Ordenamiento de array: Crear una función en JavaScript que ordene los elementos de un Array en orden ascendente. */

function ordenarAsc(array = [1, 9, 6, 5, 8, 7, 4, 2, 3]) {
  let a, b;
  for (j = 0; j < array.length - 1; j++) {
    for (i = 0; j < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        a = array[i];
        b = array[i + 1];
        array[i] = b;
        array[i + 1] = a;
      }
    }
  }
  return console.log(array);
}
