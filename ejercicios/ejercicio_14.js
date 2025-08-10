// Genera un ID único basado en un contador interno
const generarId = (function() {
    let id = 0;
    return function() {
        id++;
        return id;
    };
})();

console.log(generarId()); // 1
console.log(generarId()); // 2
