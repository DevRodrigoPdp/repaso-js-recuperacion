let startBtn = document.getElementById("startBtn")

startBtn.addEventListener("click",temporizador)

function temporizador(){

    let entrada = parseInt(prompt("Introduce tu cuenta atrás"))

    let numero = Math.floor(Math.random() * 4)
    numeroRandom = numero*1000

    let fecha = new Date()
    let dia = fecha.toLocaleDateString('es-ES',{
        weekday:'short'
    })
    let hora = fecha.toLocaleDateString('es-ES',{
        hour:'2-digit',minute:'2-digit'
    })
   


    let interval = setInterval(()=>{
        entrada--
        console.log(entrada)

        if(entrada === 0){
            clearInterval(interval)
            setTimeout(()=>{
                console.log(`Hoy es ${dia} a las ${hora}.Nos vemos mañana`)
                alert(`Hoy es ${dia} a las ${hora}.Nos vemos mañana`)
            },numeroRandom)
        }
    },1000)

}

