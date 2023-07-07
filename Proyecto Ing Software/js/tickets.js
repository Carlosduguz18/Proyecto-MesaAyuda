// import { nameUser } from "./formulario"
window.addEventListener("DOMContentLoaded", function() {
  var existingTickets = JSON.parse(localStorage.getItem("tickets")) || []

  existingTickets.forEach(function(ticket) {
    var ticketElement = document.createElement("div")
    ticketElement.classList.add("ticket")
    ticketElement.innerHTML = `
      <label for="cliente"><b>Cliente</b></label>
      <label for="clienteLabel">${ticket.nameUser}</label>

      <label for="proyecto"><b>Proyecto</b></label>
      <label for="proyectoLabel">${ticket.nameProject}</label>

      <label for="prioridad"><b>Prioridad</b></label>
      <label for="prioridadLabel">${ticket.priority}</label>

      <label for="descripcion"><b>Descripción</b></label>
      <label for="prioridadLabel">${ticket.description}</label>
    `

    var backlogTicket = document.getElementById("dashboard1")
    backlogTicket.appendChild(ticketElement)
  })
})