let btnIniciar = document.getElementById("btn-iniciar")
let visualCounter = document.getElementById("visual-counter")



btnIniciar.addEventListener("click", cuentaAtras)
function cuentaAtras() {
    let numeroRandom = Math.floor(Math.random() * 4)+1

    let entrada = parseInt(prompt("Introduce un numero"))

    let contador = entrada

    let fecha = new Date()
    let hoy = fecha.toLocaleDateString('es-ES', { 
        weekday: 'long',
    }).toUpperCase()
    let hora = fecha.getHours()
    let minutos = fecha.getMinutes()
    let intervalo = setInterval(() => {
        contador++
        visualCounter.innerHTML = contador

        if (contador >= 50) {
            clearInterval(intervalo)
            setTimeout(() => {
                let statusMessage = document.getElementById("status-message")
                statusMessage.innerHTML = `Hoy es ${hoy} a las ${hora}:${minutos}`
            }, numeroRandom * 1000)
        }

    }, 1000)
}
