// Suma un número variable de argumentos
const sumar = (...args) => args.reduce((acc, num) => acc + num, 0);

console.log(sumar(1, 2, 3, 4)); // 10
