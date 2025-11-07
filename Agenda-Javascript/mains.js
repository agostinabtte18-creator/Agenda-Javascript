class Turno {
  static id = 0
  constructor(nombre, telefono, servicio, hora) {
    this.id = ++Turno.id
    this.nombre = nombre
    this.telefono = telefono
    this.servicio = servicio
    this.hora = hora
  }
}

let agenda = []

let agendaGuardada = localStorage.getItem("agenda")
if (agendaGuardada) {
  agenda = JSON.parse(agendaGuardada)
}

let form = document.getElementById("formTurno")
let listaTurnos = document.getElementById("listaTurnos")
let mensaje = document.getElementById("mensaje")

function mostrarMensaje(texto, tipo = "info") {
  mensaje.textContent = texto
  mensaje.className = `mensaje ${tipo}`
}

function mostrarAgenda() {
  listaTurnos.innerHTML = ""
  agenda.forEach(turno => {
    let li = document.createElement("li")
    li.textContent = `${turno.nombre} - ${turno.servicio} - ${turno.hora}`
    listaTurnos.appendChild(li)
  })

}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  let nombre = document.getElementById("nombre").value
  let telefono = document.getElementById("telefono").value
  let servicio = document.getElementById("servicio").value
  let hora = document.getElementById("hora").value

let horarioOcupado = agenda.some(turno => turno.hora === hora)

    if (horarioOcupado) {
    mostrarMensaje(`⛔ El horario ${hora} ya está ocupado.`, "error")
  } else {
    let nuevoTurno = new Turno(nombre, telefono, servicio, hora)
    agenda.push(nuevoTurno)
    localStorage.setItem("agenda", JSON.stringify(agenda))
    mostrarAgenda()
    form.reset()
    mostrarMensaje(`✅ Turno registrado para las ${hora}`, "exito")
  }
})

let botonBorrar = document.getElementById("borrarTodo")

document.getElementById("borrarTodo").addEventListener("click", () => {
  if (confirm("¿Seguro que querés borrar todos los turnos?")) {
    agenda = []
    localStorage.clear()
    mostrarAgenda()
    mostrarMensaje("🧹 Se eliminaron todos los turnos.", "info")
  }
})

mostrarAgenda()