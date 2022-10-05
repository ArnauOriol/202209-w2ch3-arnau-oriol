let numbers = [];
let confirmation = true;
let counter1 = 0;

function sum(numeros) {
  let plus = 0;
  for (num in numeros) {
    plus += numeros[num];
  }
  return plus;
}

function substract(numeros) {
  let minus = numeros[0];
  for (i = 1; i < numeros.length; i++) {
    minus -= numeros[i];
  }
  return minus;
}

function multiplication(numeros) {
  let mult = numeros[0];
  for (i = 1; i < numeros.length; i++) {
    mult *= numeros[i];
  }
  return mult;
}

function division(numeros) {
  let divi = numeros[0];
  for (i = 1; i < numeros.length; i++) {
    divi /= numeros[i];
  }
  return divi;
}

do {
  do {
    do {
      numbers[counter1] = parseInt(
        prompt("Ingresa el operador numero " + (counter1 + 1))
      );
    } while (isNaN(numbers[counter1]));
    counter1++;
    if (window.confirm("Quieres añadir otro operador?")) {
      confirmation = true;
    } else {
      confirmation = false;
    }
  } while (confirmation === true);
  console.log(sum(numbers));
  console.log(substract(numbers));
  console.log(multiplication(numbers));
  console.log(division(numbers));
  if (window.confirm("Quieres reiniciar la calculadora?")) {
    confirmation = true;
    numbers = [];
    counter1 = 0;
  } else {
    confirmation = false;
  }
} while (confirmation === true);
console.log("Adios!");
