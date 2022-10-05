let number1 = parseInt(prompt("Ingresa el primer numero"));
let number2;
let operator = 0;
while (isNaN(number1)) {
  number1 = parseInt(prompt("Casi, ingresa el primer numero"));
}
if (window.confirm("Quieres saber la raíz cuadrada de " + number1 + " ?")) {
  operator = Math.sqrt(number1);
  console.log("La raíz cuadrada de " + number1 + " es " + operator.toFixed(3));
} else {
  do {
    number2 = parseInt(prompt("Ingresa el segundo numero"));
  } while (isNaN(number2));
  operator = number1 + number2;
  console.log(
    "La suma de " + number1 + " + " + number2 + " es " + operator.toFixed(3)
  );
  operator = number1 - number2;
  console.log(
    "La resta de " + number1 + " - " + number2 + " es " + operator.toFixed(3)
  );
  operator = number1 * number2;
  console.log(
    "La multiplicación de " +
      number1 +
      " * " +
      number2 +
      " es " +
      operator.toFixed(3)
  );
  operator = number1 / number2;
  console.log(
    "La división de " + number1 + " / " + number2 + " es " + operator.toFixed(3)
  );
}
