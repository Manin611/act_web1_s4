// Valida si una cadena es un correo electrónico básico
function esCorreo(correo) {
    return correo.includes("@") && correo.endsWith(".com");
}

console.log(esCorreo("test@example.com")); // true
console.log(esCorreo("test@ejemplo.org")); // false
