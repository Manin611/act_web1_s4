// Devuelve una función para contar incrementos, manteniendo el contador privado
const contador = (function() {
    let cuenta = -1;
    return function() {
        cuenta++;
        return cuenta;
    };
})();

console.log(contador()); // 0
console.log(contador()); // 1
