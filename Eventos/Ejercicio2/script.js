let mostrarX = document.getElementById("posX")
let mostrarY = document.getElementById("posY")

document.addEventListener("mousemove",function(event){
    mostrarX.innerHTML = event.clientX
    mostrarY.innerHTML = event.clientY
})