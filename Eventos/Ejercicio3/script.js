
let caja = document.getElementById("caja");

let x = 50; 
let y = 50; 
const velocidad = 15; 

document.addEventListener("keydown", function(event) {
    
    
    if (event.key === "ArrowUp" || event.key === "8") {
        y -= velocidad; 
    } 
    else if (event.key === "ArrowDown" || event.key === "2") {
        y += velocidad; 
    } 
    else if (event.key === "ArrowLeft" || event.key === "4") {
        x -= velocidad; 
    } 
    else if (event.key === "ArrowRight" || event.key === "6") {
        x += velocidad; 
    }

    caja.style.top = y + "px";
    caja.style.left = x + "px";
});