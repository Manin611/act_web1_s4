// Invierte una cadena de texto de forma recursiva
function invertir(cadena) {
    if (cadena === "") return "";
    return invertir(cadena.slice(1)) + cadena[0];
}

console.log(invertir("hola")); // aloh
