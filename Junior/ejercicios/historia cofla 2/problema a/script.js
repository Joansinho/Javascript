//solo mayores de edad, el primero que entre despues de las 2am no paga

let gratis = false;


const entrar = (tiempo)=>{
    edad = prompt("Qué edad tienes?");
        if (edad >= 18 && gratis == false && tiempo == 2 && tiempo < 7) {
            alert("Puedes entrar y además gratis");
            gratis = true;
        } 
        else if (gratis == true && edad >= 18) {
            alert(`Entras, pero debes pagar. Ya te ganaron mano`)
        } 
        else {
            alert("No puede entrar ñero, paila")
        }
}

entrar(2)
entrar(5)
entrar(1)
entrar(6)
entrar(5)
entrar(2)