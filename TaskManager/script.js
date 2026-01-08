// Inputs y Botones
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");

// Contenedores donde volcaremos la información
const taskList = document.getElementById("task-list");
const totalTasks = document.getElementById("total-tasks");
const highPriorityCount = document.getElementById("high-priority-count");

let tasks =[]
addBtn.addEventListener("click",anadir)

function anadir(){
    let valor = taskInput.value.split(";")

    if(valor.length < 2) return 


    let tarea = valor[0].trim()
    let prioridad = valor[1].trim()

    if(tarea === "" || prioridad === ""){
        alert("Rellenalo bien")
        return 
    }

    const nuevaTarea = {
        tarea : tarea,
        prioridad :prioridad
    }

    tasks.push(nuevaTarea)
    actualizarLista()


}
function actualizarLista(){

    taskList.innerHTML =""
    totalTasks.innerHTML =""

    tasks.forEach((t)=>{
        const li= document.createElement("li")
        li.innerHTML = `<span>${t.tarea} (${t.prioridad})</span>
                        <button onClick="eliminarTarea(${t.id})">Eliminar</button>`
        
        taskList.appendChild(li)
    })

    totalTasks.innerHTML = tasks.length

    const criticas = tasks.reduce((contador,t)=>{
        if(t.prioridad.toLowerCase() === "alta"){
            return contador + 1
        }else{
            return contador
        }
    },0)

    highPriorityCount.innerHTML = criticas

}

function eliminarTarea(id){
    tasks = tasks.filter(t => t.id !==id)
    actualizarLista()
}