// Matriz de pacientes
const pacientes = [
    ["Antonio", "Perez Garcia", 44, "85kg", "12345678A"],
    ["Maria", "Lopez Martinez", 32, "62kg", "87654321B"],
    ["Carlos", "Gonzalez Ruiz", 28, "78kg", "23456789C"],
    ["Laura", "Rodriguez Sanchez", 51, "68kg", "34567890D"],
    ["Pedro", "Fernandez Diaz", 39, "92kg", "45678901E"],
    ["Ana", "Torres Jimenez", 25, "58kg", "56789012F"],
    ["Javier", "Moreno Alvarez", 47, "88kg", "67890123G"],
    ["Elena", "Navarro Romero", 36, "65kg", "78901234H"],
    ["David", "Hernandez Castro", 29, "76kg", "89012345I"],
    // ["Davidd", "Hernanddez Castrdo", 19, "76kg", "89012345I"],

];


const btnMostrar = document.getElementById("btnMostrar")
const btnEstadisticas = document.getElementById("btnEstadisticas")
const btnOrdenado = document.getElementById("btnOrdenado")

btnMostrar.addEventListener("click",mostrar)
btnOrdenado.addEventListener("click",ordenado)
btnEstadisticas.addEventListener("click",estadisticas)
function mostrar(){
    let html = '<h2>📋 Lista de Pacientes</h2>';
    html += '<table>';
    html += '<tr><th>Nombre</th><th>Apellidos</th><th>Edad</th><th>Peso</th><th>DNI</th></tr>';
    let p = pacientes.forEach(p =>{
        html += `
                    <tr>
                        <td>${p[0]}</td>
                        <td>${p[1]}</td>
                        <td>${p[2]} años</td>
                        <td>${p[3]}</td>
                        <td>${p[4]}</td>
                    </tr>
                `;
    })
    html += '</table>';
    resultado.innerHTML = html;
}

function estadisticas(){

    const edad = pacientes.map(p=>p[2])
    const pesos = pacientes.map(p=>parseInt(p[3]))

    const edadPromedia = (edad.reduce((a,b)=> a+b,0)/edad.length).toFixed(1)
    const pesoPromedio = (pesos.reduce((a,b)=> a+b,0)/pesos.length).toFixed(1)

    const edadMaxima = Math.max(...edad)
    const edadMinima = Math.min(...edad)
    
    let html = '<h2>📊 Estadísticas</h2>';
            html += '<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">';
            html += `<div class="paciente-item"><strong>Total pacientes:</strong> ${pacientes.length}</div>`;
            html += `<div class="paciente-item"><strong>Edad promedio:</strong> ${edadPromedia} años</div>`;
            html += `<div class="paciente-item"><strong>Edad mínima:</strong> ${edadMinima} años</div>`;
            html += `<div class="paciente-item"><strong>Edad máxima:</strong> ${edadMaxima} años</div>`;
            html += `<div class="paciente-item"><strong>Peso promedio:</strong> ${pesoPromedio} kg</div>`;
            html += '</div>';
            
            resultado.innerHTML = html;
}
function ordenado(){
    const pacientesOrdenados = [...pacientes].sort((a,b)=> a[2]-b[2])
    let html = '<h2>👥 Pacientes Ordenados por Edad</h2>';
            html += '<table>';
            html += '<tr><th>Nombre</th><th>Apellidos</th><th>Edad</th><th>Peso</th><th>DNI</th></tr>';
    pacientesOrdenados.forEach((paciente)=>{
        html += `
                    <tr>
                        <td>${paciente[0]}</td>
                        <td>${paciente[1]}</td>
                        <td>${paciente[2]} años</td>
                        <td>${paciente[3]}</td>
                        <td>${paciente[4]}</td>
                    </tr>
                `;
    })
    html += '</table>';
    resultado.innerHTML = html;
}



