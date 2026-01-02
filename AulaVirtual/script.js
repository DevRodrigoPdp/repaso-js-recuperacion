let lista = document.getElementById("student-list")
let addBtn = document.getElementById("add-student-btn")
let studentNombre = document.getElementById("student-name")
let studentAge = document.getElementById("student-age")
let studentNumber = document.getElementById("student-grade")
let statPromedio = document.getElementById("stat-promedio")
let statMejor = document.getElementById("stat-mejor")
let statPeor = document.getElementById("stat-peor")
let suma = document.getElementById("suma")


let aulaVirtual = new Map()

addBtn.addEventListener("click",anadir)

function anadir(){
    let nombre = studentNombre.value.trim()
    let edad = parseInt(studentAge.value.trim())
    let nota = parseInt(studentNumber.value.trim())

    if(nombre === "" || isNaN(edad) || isNaN(nota)){
        alert("Introduce los datos correctamente")
        return 
    }

    if(nota <= 0  || nota >= 10){
        alert("Intoduce la nota correctamente")
        return 
    }
    aulaVirtual.set(nombre,{edad:edad,nota:nota})
    crearLista()
}

function crearLista(){

    lista.innerHTML=""

    aulaVirtual.forEach((datos,nombre)=>{
        let li  = document.createElement("li")
        
        li.innerHTML = `
            <strong>${nombre}</strong> 
            <span>Edad: ${datos.edad} años | Nota: ${datos.nota}</span>
        `;

        lista.appendChild(li)
    })

    calcularEstadisticas()


}

function calcularEstadisticas(){
    let nota = Array.from(aulaVirtual.values()).map(datos =>datos.nota)
    let notaSuma = nota.reduce((a,b)=> a+b,0)
    let notaPromedio = (notaSuma/nota.length).toFixed(1)
    let totalAlumnos = aulaVirtual.size

    let notaMaxima = Math.max(...nota)
    let notaMinima = Math.min(...nota)

    let mejorAlumno = ""
    let peorAlumno = ""

    aulaVirtual.forEach((datos,nombre) => {
        if(datos.nota === notaMaxima){
            mejorAlumno = nombre
        }
    })

    aulaVirtual.forEach((datos,nombre) => {
        if(datos.nota === notaMinima){
            peorAlumno = nombre
        }
    })

    statMejor.innerHTML = `${mejorAlumno} - ${notaMaxima}`
    statPeor.innerHTML = `${peorAlumno} - ${notaMinima}`
    statPromedio.innerHTML = `${notaPromedio}`
    suma.innerHTML = `${totalAlumnos}`

    
}