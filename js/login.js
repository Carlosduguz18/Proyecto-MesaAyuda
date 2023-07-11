
const form = document.getElementById("form")


form.addEventListener("submit", e=>{
    e.preventDefault()
    // exportar una constante
    const usuario = document.getElementById("user").value
    const pass = document.getElementById("password").value
    const recuerdameCheckbox = document.getElementById("recuerdame-checkbox")
    const recuerdame = recuerdameCheckbox.checked

    if (usuario === "carlos" && pass === "180300"){
        Swal.fire({
            html: `<h2 style="color: black;">Buen día ${usuario}!</h2><br/><h2>DIGILAB TE DA LA BIENVENIDA 🎉</h2><br/>
                    <a style="color: #4CAF50; font-weight: 600;">¿En qué podemos ayudarte el día de hoy?</a>`,
            width: '90%',
            padding: '1.5rem',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false,
            showCloseButton: true,
            button: false,
            icon: undefined,
            showConfirmButton: false,
            background: '#ccc',
            color: '#000',
            opacity: '0.9',
            customClass: {
                content: 'responsive-alert-content',
                closeButton: 'responsive-alert-close-button',
            },
        }).then(() => {
            localStorage.setItem("usuario", usuario)
            window.location.href = "ticketsOptions.html"
        })
    } else{
        Swal.fire({
            html: '<h3>⚠️ Error</h3> <br/> <h3>El usuario o la contraseña no coinciden</h3>',
            icon: 'question',
            width: '90%',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false,
            showCloseButton: true,
            button: false,
            icon: undefined,
            showConfirmButton: false,
            background: '#ccc',
            opacity: '0.9',
            customClass: {
                content: 'responsive-alert-content',
                closeButton: 'responsive-alert-close-button',
            },
        })

    // Guardando el estado del botón "Recuérdame" en el almacenamiento local
    localStorage.setItem("recuerdame-checkbox", recuerdame)

    // Verificando el estado almacenado del botón "Recuérdame" cuando se carga la página
    window.addEventListener("DOMContentLoaded", () => {
        const recuerdameCheckbox = document.getElementById("recuerdame-checkbox")
        const recuerdame = localStorage.getItem("recuerdame-checkbox")

        if (recuerdame === "true") {
            recuerdameCheckbox.checked = true
        }
    })
  }
})

// Obteniéndo referencia al enlace "¿Olvidaste tu contraseña?"
const forgotPasswordLink = document.querySelector("a[href='#']")

// Agregando evento de clic al enlace
forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault()
    
    // Mostrando una alerta a una página de restablecimiento de contraseña
    Swal.fire({
        title: '¿Olvidaste tu contraseña?',
        text: 'Contactarse con el Señor Luis Alva Villena, para que pueda pedir su contraseña, Gracias!',
        icon: 'info',
        confirmButtonText: 'Aceptar',
        background: '#ccc',
        opacity: '0.9',
    })
})