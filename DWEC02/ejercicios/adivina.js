const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});

// Genera un número entero aleatorio entre 1 y 100
const numSecreto = Math.floor(Math.random() * 100) + 1;

function jugar() {
  rl.question('Escribe un número entre el 1 y el 100: ', (respuesta) => {
    const datonum1 = parseInt(respuesta, 10);

    if (datonum1 === numSecreto) {
      console.log("Acertaste!! " + datonum1 + " es el número secreto.");
      rl.close();
    } else {
      if (datonum1 > numSecreto) {
        console.log("El número " + datonum1 + " es mayor que el número secreto.");
      } else {
        console.log("El número " + datonum1 + " es menor que el número secreto.");
      }

      rl.question('¿Quieres volver a probar? (s/n): ', (datosino) => {
        if (opcion === "s" || opcion === "si") {
          jugar(); // Llamada recursiva para pedir otro número
        } else {
          console.log("¡Gracias por jugar!");
          rl.close();
        }
      });
    }
  });
}

// Iniciar el juego
jugar();
