const colores = ["red", "green", "blue"];
let indice = 0;

setInterval(() => {
    document.body.style.backgroundColor = colores[indice];
    indice++;
    if (indice === colores.length) {
        indice = 0;
    }
}, 1000);