
const form = document.getElementById("form")


form.addEventListener("submit", e=>{
    e.preventDefault()

    const usuario = document.getElementById("user").value
    const pass = document.getElementById("password").value

    if (usuario === "carlos" && pass === "123456789"){
        Swal.fire({
            html: `<h2>Buen día ${usuario}!</h2><br/><h2>DIGILAB TE DA LA BIENVENIDA 🎉</h2><br/><a href="#">¿En qué podemos ayudarte el día de hoy?</a>`,
            width: '35%',
            padding: '1.5rem',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false,
            showCloseButton: true,
            button: false,
            icon: undefined,
            showConfirmButton: false,
        }).then(() => {
            window.location.href = "ticketsOptions.html"
        })
    } else{
        Swal.fire({
            html: '<h3>⚠️ Error</h3> <br/> <h3>El usuario o la contraseña no coinciden</h3>',
            icon: 'question',
            width: '35%',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false,
            showCloseButton: true,
            button: false,
            icon: undefined,
            showConfirmButton: false,
          })
  }

    /*if (!usuario){
        warnings += `El nombre no es válido <br>`
        entrar = true
    }

    if (!pass){
        warnings += `La contraseña no es válido <br>`
        entrar = true
    } 

    if (entrar){
        parrafo.innerHTML = warnings
    }*/
})