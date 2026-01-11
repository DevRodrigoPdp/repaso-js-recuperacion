let btnStart = document.getElementById("btn-start");
btnStart.addEventListener("click", juego);

function juego() {
 let i = 1;
let display = document.getElementById("fizzbuzz-display");

const interval = setInterval(() => {
    // Usamos "=" para que el nuevo valor sustituya al anterior
    if (i % 3 === 0 && i % 5 === 0) {
        display.innerHTML = "FizzBuzz 🚀";
    } else if (i % 3 === 0) {
        display.innerHTML = "Fizz 🥤";
    } else if (i % 5 === 0) {
        display.innerHTML = "Buzz 🐝";
    } else {
        display.innerHTML = i;
    }

    if (i >= 20) {
        clearInterval(interval);
        display.innerHTML += "<br><strong>¡Fin del juego!</strong>";
    }
    
    i++;
}, 1000);
}
