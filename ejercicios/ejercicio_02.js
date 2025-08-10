// Saluda a una persona por su nombre, usando 'Invitado' por defecto
const saludar = function(nombre = "Invitado") {
    return `¡Hola, ${nombre}!`;
};

console.log(saludar()); // ¡Hola, Invitado!
console.log(saludar("Carlos")); // ¡Hola, Carlos!
