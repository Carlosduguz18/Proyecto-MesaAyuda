
// import { nameUser } from "./formulario"
window.addEventListener("DOMContentLoaded", function() {
  var existingTickets = JSON.parse(localStorage.getItem("tickets")) || []

  existingTickets.forEach(function(ticket) {
    var ticketElement = document.createElement("div")
    ticketElement.classList.add("ticket")
    ticketElement.id = ticket.id  
    ticketElement.innerHTML = `
      <label for="cliente"><b>Cliente</b></label>
      <label for="clienteLabel">${ticket.nameUser}</label>

      <label for="proyecto"><b>Proyecto</b></label>
      <label for="proyectoLabel">${ticket.nameProject}</label>

      <label for="prioridad"><b>Prioridad</b></label>
      <label for="prioridadLabel">${ticket.priority}</label>

      <label for="descripcion"><b>Descripción</b></label>
      <label for="prioridadLabel">${ticket.description}</label>

      <button class="delete-button"><i class="fas fa-times"></i></button>
    `

    var backlogTicket = document.getElementById("dashboard1")
    backlogTicket.appendChild(ticketElement)
  })


  // Agrega la capacidad de eliminar un ticket al hacer clic en la equis
  var deleteButtons = document.querySelectorAll(".delete-button")

  deleteButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var ticketElement = button.parentElement
      var ticketId = ticketElement.id

      Swal.fire({
        title: '¿Estás seguro de eliminar?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        padding: '1.5rem',
        background: '#ccc',
        color: '#000',
        opacity: '0.9',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          ticketElement.remove()

          var existingTickets = JSON.parse(localStorage.getItem("tickets")) || []
          var updatedTickets = existingTickets.filter(function(ticket) {
            return ticket.id !== ticketId
          });
          localStorage.setItem("tickets", JSON.stringify(updatedTickets))
          //localStorage.removeItem("tickets")
          
          Swal.fire(
            'Eliminado',
            'El ticket ha sido eliminado.',
            'success'
          )
        }
      })
    })
  })
})

  /*
function limpiarTicketsGenerados() {
  localStorage.removeItem("tickets");
  alert("Se han limpiado todos los tickets generados.");
}

document.getElementById("limpiarButton").addEventListener("click", limpiarTicketsGenerados)
*/

document.getElementById("newTicketButton").addEventListener("click", function() {
  window.location.href = "ticketsOptions.html"
})

document.getElementById("logoutButton").addEventListener("click", function() {
  window.location.href = "index.html"
})

