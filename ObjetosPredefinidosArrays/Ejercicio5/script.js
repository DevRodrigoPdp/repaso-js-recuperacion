const myInterval = setInterval(myTimer,1000)
contador = 2

const date = new Date()
const hoy = date.toLocaleDateString()


function  myTimer(){
    contador--
    console.log(contador)
    if(contador === 0){
        stopInterval()
        console.log(`Tiempo Terminado,hoy es ${hoy}`)
    }
}

function stopInterval(){
    clearInterval(myInterval)
}