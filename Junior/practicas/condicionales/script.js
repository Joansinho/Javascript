//sentencias que permite validar algo, para que un bloque codigo se ejecute si se cumple una condicion


num = 20;
num2 = 30;


//if, se cumple un bloque de codigo si es verdadero una condicion
if (num2 < num) {
    alert("Este condicional se esta ejecutando");
}


//else if, si no se cumple una condicion comprueba si se puede cumplir otra
else if (num < num2) {
    alert("Este else if se esta cumpliendo");
}


//else, si nada se cumple se ejecuta ese fragmento
else {
    alert("No se pudo ejecutar nada de lo anterior");
}

