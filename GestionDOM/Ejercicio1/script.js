const parrafo1={
    titulo:"Primer bloque de parrafos",
    hijos: ["Empezó a hablar con su reloj","Vio ranitas saltarinas","Hablo con setas"]
}

const parrafo2={
    titulo:"Segundo bloque de parrafos",
    hijos:["Esta es la historia","del pobre Jimy","un tiro en el pie"]
}

let estructura = new Set()

estructura.add(parrafo1)
estructura.add(parrafo2)


estructura.forEach(parrafo =>{

    let h2 = document.createElement("h2")
    h2.innerHTML = parrafo.titulo
    document.body.appendChild(h2)


    parrafo.hijos.forEach((texto)=>{
        const p = document.createElement("p")
        p.innerHTML = texto
        p.addEventListener("click",borrar)
        document.body.appendChild(p)
    })
})


function borrar(event){
    this.remove()
}