//la programacion orientada a objetos es un paradigma que cambia la forma en la que se programa para que sea incluso mas legible.


//clase. La clase es la base de todo, donde crearemos los objetos.
//Objeto. Es el resultado de las clases
//Atributo. Las caracteristicas que tiene un objeto
//Metodo. Las cosas que puede hacer un objeto
//Constructor. Es una función que debe tener un objeto, donde esta las propiedades del objeto
//Instanciacion. Cuando una clase se creó, se insancio una clase o un objeto


//creacion de una clase
class animal { 
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;  //cuando decimos this indicamos que el objeto va a tener ese atributo, el nombre que sigue despues de this. puede ser lo que sea
        this.color = color; //this selecciona el objeto mismo, y define que será lo que tendrá
        this.info = `soy de la especie ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
}

const gato = new animal("gato", "5", "naranja"); //asi definimos un objeto
const perro = new animal("perro", "10", "cafe"); //se pueden crear/definir diferentes objetos
alert(perro.info); //de esta manera accedemos a las propiedades de la clase
alert(gato.info);