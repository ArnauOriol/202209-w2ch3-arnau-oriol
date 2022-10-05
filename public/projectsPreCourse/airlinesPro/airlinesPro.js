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
    if (typeof userName === "string") {
      userName = userName.trim();
    }
  } while (typeof userName != "string" || userName === "");
  console.log("Bienvenido/a " + userName);
  return userName;
}

function seeFlights(flights2) {
  console.log("**********VUELOS**********");
  for (i = 0; i < flights2.length; i++) {
    if (flights2[i].scale === true) {
      console.log(
        "El vuelo " +
          flights2[i].id +
          " con origen " +
          flights2[i].from +
          " y destino " +
          flights2[i].to +
          " tiene un coste de " +
          flights2[i].cost +
          " € con escala"
      );
    } else {
      console.log(
        "El vuelo " +
          flights2[i].id +
          " con origen " +
          flights2[i].from +
          " y destino " +
          flights2[i].to +
          " tiene un coste de " +
          flights2[i].cost +
          " € y no realiza ninguna escala"
      );
    }
  }
  console.log("**************************");
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

const askForRole = () => {
  let role = prompt("Eres admin o usuario? (admin/user)");
  if (role === null) {
    askForRole();
  } else {
    role = role.toLowerCase();
    switch (role) {
      case "admin":
        adminActions();
        break;
      case "user":
        userActions();
        break;
      default:
        askForRole();
    }
  }
};

const adminActions = () => {
  let action = prompt(
    "Que deseas hacer crear o eliminar vuelos? (create/delete)"
  );
  if (action === null || action === "") {
    adminActions();
  } else if (action.toLowerCase() === "create") {
    createFlight();
  } else if (action.toLowerCase() === "delete") {
    deleteFlight();
  } else {
    adminActions();
  }
};

const userActions = () => {
  let price = +prompt("Introduzca el presupuesto de su proximo vuelo");
  console.log("**********FILTRO DE VUELOS POR PRECIO**********");
  for (i = 0; i < flights.length; i++) {
    if (price >= flights[i].cost) {
      console.log(
        "El vuelo con origen " +
          flights[i].from +
          " y destino " +
          flights[i].to +
          " tiene un coste de " +
          flights[i].cost +
          " €"
      );
    }
  }
  console.log("***********************************************");
};

const createFlight = () => {
  if (flights.length < 15) {
    let newFlight = {};
    let provisionalId = 0;
    let scaleIsBoolean = false;
    for (i = 0; i < flights.length; i++) {
      if (provisionalId === flights[i].id) {
        provisionalId++;
        i = 0;
      }
    }
    newFlight.id = provisionalId;
    do {
      newFlight.to = prompt("Elija el destino del nuevo vuelo");
      if (typeof newFlight.to === "string") {
        newFlight.to = newFlight.to.trim();
      }
    } while (typeof newFlight.to != "string" || newFlight.to === "");
    do {
      newFlight.from = prompt("Ahora elija el origen del nuevo vuelo");
      if (typeof newFlight.from === "string") {
        newFlight.from = newFlight.from.trim();
      }
    } while (typeof newFlight.from != "string" || newFlight.from === "");
    do {
      newFlight.cost = parseInt(prompt("Elija el coste del nuevo vuelo"));
    } while (isNaN(newFlight.cost));
    do {
      newFlight.scale = prompt(
        "Quieres que el nuevo vuelo tenga escala? (y/n)"
      );
      newFlight.scale = newFlight.scale.toLowerCase();
      switch (newFlight.scale) {
        case "y":
          newFlight.scale = true;
          scaleIsBoolean = true;
          break;
        case "n":
          newFlight.scale = false;
          scaleIsBoolean = true;
          break;
        default:
          break;
      }
    } while (scaleIsBoolean === false);
    flights.push(newFlight);
    alert("Nuevo vuelo creado con exito");
    seeFlights(flights);
  } else {
    console.log("Numero maximo de vuelos");
  }
};

const deleteFlight = () => {
  seeFlights(flights);
  let deleter;
  let deletedFlight = false;
  do {
    deleter = parseInt(prompt("Introduzca la ID del vuelo que desee eliminar"));
  } while (isNaN(deleter));
  for (i = 0; i < flights.length; i++) {
    if (deleter === flights[i].id) {
      flights.splice(i, 1);
      deletedFlight = true;
      alert("El vuelo ha sido eliminado con exito");
    }
  }
  if (deletedFlight === false) {
    alert("No hemos encontrado el vuelo con ID " + deleter);
  }
  seeFlights(flights);
};

logIn(userName);
seeFlights(flights);
averageCost(flights);
scaleCounter(flights);
lastFive(flights);
askForRole();
