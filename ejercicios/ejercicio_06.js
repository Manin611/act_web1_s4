// Devuelve solo los números mayores a 10 de un arreglo
function filtrarMayores(arr) {
    return arr.filter(num => num > 10);
}

console.log(filtrarMayores([5, 12, 8, 15])); // [12, 15]
