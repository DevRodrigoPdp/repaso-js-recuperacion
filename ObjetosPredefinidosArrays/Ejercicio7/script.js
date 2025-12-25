let entrada = parseInt(prompt("¿Cuántos cuadrados quieres crear?"));
setInterval(movimiento, 1000);
function movimiento() {
  for (let i = 0; i < entrada; i++) {
    let cuadrado = document.createElement("div");

    cuadrado.style.position = "absolute";

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    cuadrado.style.backgroundColor = `rgb(${r},${g},${b})`;

    let posX = Math.floor(Math.random() * window.innerWidth);
    let posY = Math.floor(Math.random() * window.innerHeight);

    cuadrado.style.width = "30px";
    cuadrado.style.height = "30px";
    cuadrado.style.left = posX + "px";
    cuadrado.style.top = posY + "px";

 
    document.body.appendChild(cuadrado);
  }
}
