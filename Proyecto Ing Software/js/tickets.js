// import { nameUser } from "./formulario"

window.addEventListener('DOMContentLoaded', function() {
    // Obtener los parámetros de URL
    // var urlParams = new URLSearchParams(window.location.search);
    var nameUser = "Carlos Dueñas"
    var nameProject = "Odoo"
  
    if (nameUser && nameProject) {
      // Crear un card con los datos del formulario
      var ticket = document.createElement('div')
      ticket.classList.add('ticket')
      ticket.innerHTML = `
        <h3>${nameUser}</h3>
        <h4>Proyecto: ${nameProject}</h4>
      `
  
      // Agregar el card a la primera tabla
      var backlogTicket = document.getElementById('backlog-ticket')
      backlogTicket.appendChild(ticket)
    }
  })