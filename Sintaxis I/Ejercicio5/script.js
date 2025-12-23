entrada = prompt("Introduce tus calificaciones separadas por ;")

notas_separadas = entrada.split(";")

for (let i = 0; i < notas_separadas.length; i++) {
    let notaActual = Number(notas_separadas[i])

    if (notaActual >= 0 && notaActual < 3) {
        console.log(`${notaActual}: Muy deficiente`);
    } else if (notaActual >= 3 && notaActual < 5) {
        console.log(`${notaActual}: Insuficiente`);
    } else if (notaActual >= 5 && notaActual < 6) {
        console.log(`${notaActual}: Bien`);
    } else if (notaActual >= 6 && notaActual < 9) {
        console.log(`${notaActual}: Notable`);
    } else if (notaActual >= 9 && notaActual <= 10) {
        console.log(`${notaActual}: Sobresaliente`);
    } else {
        console.log(`${notaActual}: Nota no válida`);
    }
}