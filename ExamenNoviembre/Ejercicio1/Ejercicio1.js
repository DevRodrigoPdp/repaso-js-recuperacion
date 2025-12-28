let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", contador);

function contador() {
    let entrada = parseInt(prompt("Ingresa un número para la cuenta atrás:"));

   
    if (isNaN(entrada)) {
        alert("Por favor, introduce un número válido.");
        return;
    }

    let cuentaAtras = entrada;
    
 
    let tiempoRandom = Math.floor(Math.random() * 4) * 1000;

  
    let fechaHoy = new Date();
    let diaSemana = fechaHoy.toLocaleString('es-ES', { weekday: 'long' });
    let horas = fechaHoy.getHours();

    let interval = setInterval(() => {
        cuentaAtras--;
        console.log(cuentaAtras);

       
        if (cuentaAtras <= 0) {
            clearInterval(interval);

            setTimeout(() => {
                const mensaje = `Hoy es ${diaSemana} a las ${horas}. Nos vemos mañana.`;
                alert(mensaje);
                console.log(mensaje);
            }, tiempoRandom); 
        }
    }, 1000);
}