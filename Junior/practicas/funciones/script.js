//Es un bloque de codigo que es reutilizable mediante asignaciones de nombre. 


//creacion de funcion (function es una palabra reservada)
function funcion() {
    alert("Hola, esta es una funcion")
};

funcion(); //de esta forma se llama una funcion


//return. Devuelve algun valor de una parte de un codigo. 
function saludar() {
    alert("Hola")
    return "La función se ejecuto" //esto es lo que va a retornar. El return termina el bucle, entonces lo que vaya despues del return
                                   //no será ejecutado
};

let retornar = saludar();


//parametros. Los parametros no existen fuera de la funcion, tienen scope regional.
function suma(num1, num2) { //lo que esta dentro de los parentesis son los parametros. 
    resultado = num1 + num2;
    alert(resultado);
}

suma(20, 50); //de esta manera podemos ingresar nosotros mismos los datos para la funcion, haciendo que sea mas funcional.
suma(30, 12); 


//funciones flecha. Se trabaja más con funciones flecha
const flecha = parametro =>{ //el function es reemplazado por la flechita. si usamos solo un parametro no se requieren parentesis 
    alert("Hola")
}

/* las funciones flecha se pueden escribir en una sola linea */ const flecha1 = parametro => {alert("Hola")}