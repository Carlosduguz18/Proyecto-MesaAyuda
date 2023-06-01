// import { nameUser } from "./formulario"

window.addEventListener('DOMContentLoaded', function() {
    // Obtener los parámetros de URL
    // var urlParams = new URLSearchParams(window.location.search);
    var affair = "Deseo realizar un mantenimiento en la base de datos"
    var nameTable = "Backup"
    var dateLine = "01/06/2023"
    var client = "Carlos Dueñas"
    var nameProject = "Mantenimiento de la base de datos"
    var priority = "Urgente"
    var description = "Se cayó la base de datos por cierta cuestión que pasó .."

  
    if (affair && nameTable && dateLine && client && nameProject && priority && description) {
      // Crear un card con los datos del formulario
      var ticket = document.createElement('div')
      ticket.classList.add('ticket')
      ticket.innerHTML = `
        <label for="asuntoInput">${affair}</label> <br><br>
      
        <label for="tablaInput">${nameTable}</label> <br><br>
      
        <label for="fechaInput">Fecha de Solicitud</label>
        <label for="fechaInput">${dateLine}</label><br><br>
      
        <label for="clienteInput">Cliente</label>
        <label for="clienteInput">${client}</label><br><br>
      
        <label for="proyectoInput">Proyecto</label>
        <label for="proyectoInput">${nameProject}</label><br><br>
      
        <label for="prioridadInput">Prioridad</label>
        <label for="prioridadInput">${priority}</label><br><br>
      
        <label for="descripcionInput">Descripción del ticket</label>
        <textarea id="descripcionInput" placeholder="Descripción del ticket">${description}</textarea>
      `
  
      // Agregar el card a la primera tabla
      var backlogTicket = document.getElementById('backlog-ticket')
      backlogTicket.appendChild(ticket)
    }
  })