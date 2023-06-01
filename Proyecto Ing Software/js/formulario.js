// document.getElementById("mostrar-formulario").addEventListener("click", function() {
function mostrarFormulario() {
    var contenedorFormulario = document.getElementById("contenedor-formulario")

    // Cargar el contenido del formulario.html en el contenedor
    fetch("formulario.html")
        .then(response => response.text())
        .then(data => {
            contenedorFormulario.innerHTML = data
            contenedorFormulario.classList.remove("hidden")
            // Establecer el valor predeterminado del campo "priority" como "high"
            document.getElementById("priority").value = "high"
            // Obtener el usuario logueado y asignar su valor al campo "nameUser"
            // var usuarioLogueado = obtenerUsuario() // Función que obtiene el usuario logueado
            // document.getElementById("nameUser").value = usuarioLogueado
    
            // Agregar el evento de envío al formulario cargado
            document.getElementById("form-formulario-id").addEventListener("submit", function(e) {
                e.preventDefault()
    
                // Obtener los valores de los campos
                var nameUser = document.getElementById("name-user").value
                var email = document.getElementById("email").value
                var nameProject = document.getElementById("name-project").value
                var affair = document.getElementById("affair").value
                var description = document.getElementById("description").value
                var priority = document.getElementById("priority").value
                var type = document.getElementById("type").value
                var deadLine = document.getElementById("dead-line").value
                var departament = document.getElementById("departament").value
                var others = document.getElementById("others").value

                if (nameUser && email && nameProject && affair && description && priority && type && deadLine && departament) {
                    window.location.href = 'backupTickets.html'
                }
            })

            document.getElementById("cancelar-btn").addEventListener("click", function() {
                cancelarTicket()
            })
        })
}

function cancelarTicket() {
    var contenedorFormulario = document.getElementById("contenedor-formulario")
    // Cerrar el formulario estableciendo su estilo de visualización en "none"
    contenedorFormulario.classList.add("hidden")
}

/*function obtenerUsuario() {
    var userLogin = document.getElementById("user").value
    return userLogin
}*/
