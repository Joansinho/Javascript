/*3 chicos de 23 años entran a una heladeria a comprar un helado. los precios no estan al lado de cada estante con su respectivo helado,
por su parte quieren comprar el helado mas caro que puedan comprar con el dinero que tienen. Cada uno tiene un monto diferente. 
tabla de referencia con los precios de los helados

Soluciones: -Ingresar el monto y mostrar el helado mas caro que pueden comprar
            -Si hay 2 o mas con el mismo precio mostrar ambos.
            -Indicar las vueltas. */

let nombre = prompt("Ingrese su nombre: ");
let monto = prompt("Ingrese su monto: ");


const heladoAgua= 0.6;
const heladoCrema= 1;
const heladoHeladix= 1.6;
const heladoHeladovich= 1.7;
const heladoHelardo= 1.8;
const poteConfites= 2.9;
const poteUnCuarto= 2.9;

if (monto >= 2.9)
    alert(`${nombre} los helados más caros que puedes comprar son: poteConfites y poteUnCuarto. Tus vueltas son: ${monto - poteConfites}$`);

else if (monto >= 1.8)
    alert(`${nombre} el helado mas caro que puedes comprar es: heladoHelardo. Tus vueltas son: ${monto - heladoHelardo}$`);

else if (monto >= 1.7)
    alert(`${nombre} el helado mas caro que puedes comprar es: heladoHeladovich. Tus vueltas son: ${monto - heladoHeladovich}$`);

else if (monto >= 1.6)
    alert(`${nombre} el helado mas caro que puedes comprar es: heladoHeladix. Tus vueltas son: ${monto - heladoHeladix}$`);

else if (monto < 1.5 && monto > 0.9)
    alert(`${nombre} el helado mas caro que puedes comprar es: heladoCrema. Tus vueltas son: ${monto - heladoCrema}$`);

else if (monto < 1.0 && monto > 0.6)
    alert(`${nombre} puedes comprar el siguiente helado heladoAgua. Tus vueltas son: ${monto - heladoAgua}$`);

else 
    alert("No tienes ni un mango papi");
