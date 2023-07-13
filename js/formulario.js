
    function obtenerUsuarioRegistrado() {
        return localStorage.getItem("usuario")
    }

    // document.getElementById("mostrar-formulario").addEventListener("click", function() {
    function mostrarFormulario(event) {
        var contenedorFormulario = document.getElementById("contenedor-formulario")
      
        // Cargar el contenido del formulario.html en el contenedor
        fetch("formulario.html")
            .then((response) => response.text())
            .then((data) => {
                contenedorFormulario.innerHTML = data
                contenedorFormulario.classList.remove("hidden")
                // Establecer el valor predeterminado del campo "priority" como "high"
                document.getElementById("priority").value = "urgente"
                // Obtener el usuario logueado y asignar su valor al campo "nameUser"
                // var usuarioLogueado = obtenerUsuario() // Función que obtiene el usuario logueado
                // document.getElementById("nameUser").value = usuarioLogueado
        
                // Obtener los elementos del formulario
                var nameUserField = document.getElementById("name-user")
                var emailField = document.getElementById("email")
                var nameProjectField = document.getElementById("name-project")
                var affairField = document.getElementById("affair")

                // Obtener el usuario registrado y asignar su valor al campo "nameUser"
                var usuarioRegistrado = obtenerUsuarioRegistrado()
                nameUserField.value = usuarioRegistrado
        
                // Llenar los campos del formulario en base al botón seleccionado
                var botonSeleccionado = event.target.innerText
                switch (botonSeleccionado) {
                    case "Nuevo SISTEMA":
                        emailField.value = "correo@example.com"
                        nameProjectField.value = "Nuevo sistema"
                        affairField.value = "Solicitud de desarrollo de un nuevo sistema"
                        break
                    case "Mantenimiento en la BASE DE DATOS":
                        emailField.value = "correo@example.com"
                        nameProjectField.value = "Mantenimiento en la base de datos"
                        affairField.value = "Solicitud de mantenimiento en la base de datos"
                        break
                    case "Se cayó mi SISTEMA":
                        emailField.value = "correo@example.com"
                        nameProjectField.value = "Reparación de sistema caído"
                        affairField.value = "Reporte de sistema caído"
                        break
                    case "Cambios a mi PÁGINA WEB":
                        emailField.value = "correo@example.com"
                        nameProjectField.value = "Cambios en página web"
                        affairField.value = "Solicitud de cambios en mi página web"
                        break
                    case "Crear una FACTURACIÓN ONLINE":
                        emailField.value = "correo@example.com"
                        nameProjectField.value = "Facturación online"
                        affairField.value = "Solicitud de creación de sistema de facturación online"
                        break
                    case "Otros ...":
                        emailField.value = "correo@example.com"
                        nameProjectField.value = "Otro proyecto"
                        affairField.value = "Solicitud de otro tipo de proyecto"
                        break
                    default:
                        break
                }
      
                // Agregar el evento de envío al formulario cargado
                document.getElementById("form-formulario-id").addEventListener("submit", function (e) {
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

                    // Almacenar los valores en localStorage
                    var ticket = {
                        nameUser: nameUser,
                        email: email,
                        nameProject: nameProject,
                        affair: affair,
                        description: description,
                        priority: priority,
                        type: type,
                        deadLine: deadLine,
                        others: others
                    }
                    var existingTickets = JSON.parse(localStorage.getItem("tickets")) || []
                    existingTickets.push(ticket)
                    localStorage.setItem("tickets", JSON.stringify(existingTickets))

                    if (nameUser && email && nameProject && affair && description && priority && type && deadLine) {
                        window.location.href = 'backupTickets.html'
                    }  
                })
        
                document.getElementById("cancelar-btn").addEventListener("click", function () {
                    cancelarTicket()
                })
            })
    }
      
    function cancelarTicket() {
        var contenedorFormulario = document.getElementById("contenedor-formulario")
        // Cerrar el formulario estableciendo su estilo de visualización en "none"
        contenedorFormulario.classList.add("hidden")
    }
      
    document.getElementById("nextButton").addEventListener("click", function () {
        window.location.href = "backupTickets.html"
    })
