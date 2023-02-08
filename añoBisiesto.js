// Un año será bisiesto si:
// - Es divisible entre 4
// - Un año que es divisible entre 100
// no es bisiesto, a menos que también
// sea divisible entre 400

function esBisiesto() {
    //Creamos la función esBisiesto
    // Solicitamos al usuario que ingrese un año
    let año = prompt("Por favor ingrese un año");
    // Convertir el año ingresado a un número entero
    año = parseInt(año);
  
    // Comprobar si el año es divisible entre 4
    if (año % 4 === 0) {
      // Comprobar si el año es divisible entre 100
      if (año % 100 === 0) {
        // Comprobar si el año es divisible entre 400
        if (año % 400 === 0) {
          // Imprimir un mensaje que indique que el año ingresado es bisiesto
          console.log("El año ingresado es bisiesto");
        } else {
          // Imprimir un mensaje que indique que el año ingresado no es bisiesto
          console.log("El año ingresado no es bisiesto");
        }
      } else {
        // Imprimir un mensaje que indique que el año ingresado es bisiesto
        console.log("El año ingresado es bisiesto");
      }
    } else {
      // Imprimir un mensaje que indique que el año ingresado no es bisiesto
      console.log("El año ingresado no es bisiesto");
    }
  }
  // Llamar a la función isLeapYear
  esBisiesto();
  

  //Segunda opcion
  
  function esBisiesto() {
    let año = parseInt(prompt("Por favor ingrese un año"));
    console.log(
    (año % 4 === 0 && año % 100 !== 0) 
    || año % 400 === 0 
    ? "El año ingresado es bisiesto" 
    : "El año ingresado no es bisiesto");
  }
  
  esBisiesto();