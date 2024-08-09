//los arrays son objetos. En los arrays se pueden almacenar muchos datos

//cracion de arrays:

//([]) los arrays tienen indice. [0, 1, 2, 3, 4, 5, 6 ...]
let array1 = ["dato1", "dato1", "dato1", "dato1", "dato1", 1, 2, 3];


//se puede mostrar un solo elemento de un array de la siguiente forma:
alert(array1[1])


//si un elemento no existe en el indice saldrá undefined. 


//arrays asociativos. Permite asociar manualmente el indice de los datos para llamarlos facilmente.


let  array2 = {
    dato1: "abc",
    dato2: "123",
    dato3: "111",
    dato4: "444"
};

alert(array2["dato1"]);

