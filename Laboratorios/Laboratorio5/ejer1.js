/*Realice una función que reciba un arreglo como parámetro y liste los tipos de datos de sus elementos y cuantos de cada tipo.*/

var arr=[1, 'hola',3,true,[1,2,3],'hola2'];

var funcion = x => {
    let typeArr=[];
    let counts={};

    x.forEach(element => {
       typeArr.push(typeof element); 
    });

    typeArr.forEach(element =>{
        counts[element]= (counts[element] || 0)+1;
    });

     console.log(typeArr);
     console.log(counts);
}

funcion(arr);
