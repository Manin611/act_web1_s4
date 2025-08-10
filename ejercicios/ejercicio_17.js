// Recibe dos números y una función callback para realizar una operación
function operacion(a, b, callback) {
    return callback(a, b);
}

console.log(operacion(5, 3, (a, b) => a * b)); // 15
