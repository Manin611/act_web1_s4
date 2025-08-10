// Reemplaza los espacios en una cadena por guiones
const reemplazarEspacios = function(cadena) {
    return cadena.replace(/ /g, "-");
};

console.log(reemplazarEspacios("Hola Mundo")); // Hola-Mundo
