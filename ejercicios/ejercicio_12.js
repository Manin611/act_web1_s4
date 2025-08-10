// Multiplica todos los números de un arreglo
function multiplicarArreglo(arr) {
    return arr.reduce((acc, num) => acc * num, 1);
}

console.log(multiplicarArreglo([2, 3, 4])); // 24
