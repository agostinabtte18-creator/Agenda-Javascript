let menu = 0;

let agenda = [
  { nombre: "Joel", telefono: "3515678963" },
  { nombre: "Irina", telefono: "3543678723" },
  { nombre: "Mayra", telefono: "3543543678" }
];

function agregarContacto() {
  let nombre = prompt("Ingrese el nombre del contacto:");
  let telefono = prompt("Ingrese el número de teléfono:");

  if (nombre !== "" && telefono !== "") {
    agenda.push({ nombre: nombre, telefono: telefono });
    alert("Contacto agregado: " + nombre + " - " + telefono);
  } else {
    alert("Debe ingresar un nombre y un teléfono válidos.");
  }
}

function mostrarAgenda() {
  if (!agenda[0]) { 
    alert("La agenda está vacía.");
  } else {
    console.log("Contactos en la agenda:");
    for (let i = 0; i < 1000; i++) {
      if (!agenda[i]) {
        break;
      }
      console.log((i + 1) + ". " + agenda[i].nombre + " - " + agenda[i].telefono);
    }
    alert("Revisa la consola para ver todos los contactos.");
  }
}

function buscarContacto() {
  let nombreBuscado = prompt("Ingrese el nombre a buscar:");
  let encontrado = false;

  for (let i = 0; i < 1000; i++) {
    if (!agenda[i]) { 
      break;
    }
    if (agenda[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
      alert("Contacto encontrado: " + agenda[i].nombre + " - " + agenda[i].telefono);
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    alert("No se encontró ese contacto.");
  }
}

menu = parseInt(
  prompt("Elija una opción:\n1-Agregar contacto \n2-Mostrar agenda \n3-Buscar contacto \n4-Salir")
);

while (menu !== 4) {
  switch (menu) {
    case 1:
      agregarContacto();
      break;
    case 2:
      mostrarAgenda();
      break;
    case 3:
      buscarContacto();
      break;
    default:
      alert("Opción incorrecta");
  }

  menu = parseInt(
    prompt("Elija una opción:\n1-Agregar contacto\n2-Mostrar agenda\n3-Buscar contacto\n4-Salir")
  );
}

alert("¡Gracias por usar la Agenda!");
