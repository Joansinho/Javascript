//bucles son bloques de codigos que se repiten constantemente siempre y cuando se cumpla una condición.

let num = 0;


//bucle while, se ejecuta mientras la condicion sea verdadera
while (num < 10) {
    num++;
};


//do while. primero se ejecuta un bloque de codigo y despues se verifica si se cumpliendo la condicion. Bucle indeterminado
do {
    num++;
}

while (num < 10); 


//sentencia break. detiene el bucle. Se pueden usar condiciones para terminarlo.
while (num < 1000) {
    numero++;
    if (numero == 10) {
        break;
    }
};


//for. Este bucle es determinado. Le indicamos cuantas veces se va a ejecutar. Declaracion, condicion, iteracion.
for (let i = 0; i < 6; i++) { //cada fase esta separada por ;. Primero declaramos la variable con la que el bucle iterara. Despues la condicion,
                                //en este caso se ejecutará hasta que sea 6. Por ultimo si es incremento o decremento, en este caso es incremento.
};

//la variable "i" solo existe en este bloque, por el scope. Tambien se puede declarar la variable que vamos a usar por fuera del bloque
let i = 0;

for (i; i < 6; i++) { //en estos casos solo indicamos la variable que usaremos. 

};


//sentencia continue. Ignora una parte de la iteracion y continua.
for (i; i < 20; i++) {
    if (i == 15 && 16) {
        continue;
    }
    document.write(i + "<br>");
};


//for in. Es un bucle de iteracion, recorre la posicion de un array o un iterable. Devuelve la posición
let datos = ["dato1", "dato2", "dato3", "dato4"];

for (dato in datos) { //dato es una variable creada solo para ese bloque de codigo, como "i". El nombre de esta variable puede ser el que sea
    document.write(`${dato} <br>`)
};


//for of. Este bucle recorre los datos de algun iterable. Devuelve el valor
for (dato of datos) {
    document.write(`${dato} <br>`)
};


//sentencia label. le damos como un nombre al bucle completo para manjeralo, se puede usar con continuo o con break.  

array1 = ["dato", "dato", "dato", "dato"];
array2 = ["dato", "dato", array1];

forBucle:
for (array in array2) {
    if (array == 2) {
        for (let array of array1) {
            document.write(array);
            break forBucle;
        }
    } else {
        document.write(array2[array])
    }
}