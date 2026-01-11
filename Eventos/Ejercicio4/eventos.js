let cuadro = document.getElementById("cuadro")
let infoCoordenadas = document.getElementById("infoCoordenadas")

cuadro.addEventListener("mousemove",(e)=>{
    let ejeX = e.clientX
    let ejeY = e.clientY

    infoCoordenadas.innerHTML = `Eje X : ${ejeX} y Eje Y : ${ejeY}`
})

document.addEventListener("mouseout",(e)=>{
    let ejeX = e.clientX
    let ejeY = e.clientY
    infoCoordenadas.innerHTML = `Eje X : ${ejeX} y Eje Y : ${ejeY}`
})


let cajaColor = document.querySelectorAll(".caja-color")

cajaColor.forEach(caja =>{
    caja.addEventListener("mouseover",()=>{
        caja.style.transform="scale(1.2)"
        caja.style.opacity = "0.5"
    })

    caja.addEventListener("mouseout",()=>{
        caja.style.transform ="scale(1)"
        caja.style.opacity = "1"
    })
})


let mensaje = document.getElementById("mensaje");
let contador = document.getElementById("contador")


mensaje.addEventListener("input",(e)=>{
    let caracteres = e.target.value.length

    contador.innerHTML = `Caracteres : ${caracteres}`

    if(caracteres >= 50){
        contador.classList.add("error-texto")
    }else{
        contador.classList.remove("error-texto")
    }
})

let tecladoInput = document.getElementById("tecladoInput")
let resultadoTecla = document.getElementById("resultadoTecla")

tecladoInput.addEventListener("keydown",(e)=>{

    let tecla = e.key
    resultadoTecla.innerHTML = tecla
})  