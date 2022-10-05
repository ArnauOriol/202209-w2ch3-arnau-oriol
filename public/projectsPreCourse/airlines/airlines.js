const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

let userName;

function logIn(userName) {
  do {
    userName = prompt("Introduzca su nombre de usuario: ");
  } while (typeof userName != "string" || userName === "");
  console.log("Bienvenido/a " + userName);
  return userName;
}

function seeFlights(flights2) {
  for (i = 0; i < flights2.length; i++) {
    if (flights2[i].scale === true) {
      console.log(
        "El vuelo con origen " +
          flights2[i].from +
          " y destino " +
          flights2[i].to +
          " tiene un coste de " +
          flights2[i].cost +
          " € con escala"
      );
    } else {
      console.log(
        "El vuelo con origen " +
          flights2[i].from +
          " y destino " +
          flights2[i].to +
          " tiene un coste de " +
          flights2[i].cost +
          " € y no realiza ninguna escala"
      );
    }
  }
}

function averageCost(flights3) {
  let allCosts = 0;
  for (i = 0; i < flights3.length; i++) {
    allCosts = allCosts + flights3[i].cost;
  }
  return console.log(
    "El coste medio de todos los vuelos es de: " + allCosts / flights3.length
  );
}

function scaleCounter(flights4) {
  let counter = 0;
  for (i = 0; i < flights4.length; i++) {
    if (flights4[i].scale) {
      counter++;
    }
  }
  return console.log("Ahora mismo hay " + counter + " vuelos con escala.");
}

function lastFive(flights5) {
  let show = flights5.length - 5;
  console.log("ULTIMOS 5 VUELOS DEL DIA: ");
  for (i = 0; i < flights5.length; i++) {
    if (show <= 0) {
      console.log("Vuelo con destino: " + flights5[i].to);
    }
    show--;
  }
}

logIn(userName);
seeFlights(flights);
averageCost(flights);
scaleCounter(flights);
lastFive(flights);
