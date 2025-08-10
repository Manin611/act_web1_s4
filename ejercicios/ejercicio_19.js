// Imprime un mensaje después de un tiempo definido por el usuario
const retrasarMensaje = function(mensaje, tiempo) {
    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);
};

retrasarMensaje("Hola", 2000);
