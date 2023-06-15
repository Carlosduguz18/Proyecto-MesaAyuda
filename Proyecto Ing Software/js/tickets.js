// import { nameUser } from "./formulario"
window.addEventListener("DOMContentLoaded", function() {
  var existingTickets = JSON.parse(localStorage.getItem("tickets")) || []

  existingTickets.forEach(function(ticket) {
    var ticketElement = document.createElement("div")
    ticketElement.classList.add("ticket")
    ticketElement.innerHTML = `
      <label for="cliente">Cliente</label>
      <label for="clienteLabel">${ticket.nameUser}</label>

      <label for="proyecto">Proyecto</label>
      <label for="proyectoLabel">${ticket.nameProject}</label>

      <label for="prioridad">Prioridad</label>
      <label for="prioridadLabel">${ticket.priority}</label>

      <label for="descripcion">Descripción</label>
      <label for="prioridadLabel">${ticket.description}</label>
    `

    var backlogTicket = document.getElementById("backlog-ticket")
    backlogTicket.appendChild(ticketElement)
  })
})

// Función para habilitar la funcionalidad de arrastrar y soltar
function habilitarArrastrarSoltar() {
  // Obtener todas las tarjetas de ticket
  var tickets = document.querySelectorAll('.ticket');

  // Agregar los eventos necesarios a cada tarjeta de ticket
  tickets.forEach(function(ticket) {
    // Establecer el evento de arranque de arrastre
    ticket.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/plain', ticket.id);
    });

    // Establecer el evento de permitir soltar
    ticket.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    // Establecer el evento de soltar
    ticket.addEventListener('drop', function(e) {
      e.preventDefault();
      var ticketId = e.dataTransfer.getData('text/plain');
      var targetTable = e.currentTarget.parentNode;
      var sourceTable = document.getElementById(ticketId).parentNode;
      
      // Mover el ticket de una tabla a otra
      targetTable.appendChild(document.getElementById(ticketId));

      // Actualizar el estado del ticket en localStorage si es necesario
      actualizarEstadoTicket(ticketId, targetTable.id);
    });
  });
}

// Llamar a la función para habilitar el arrastrar y soltar
habilitarArrastrarSoltar();






