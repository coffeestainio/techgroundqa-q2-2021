// dado una funcion que determina palindromos
// crear casos de prueba

// verificar correctamente
// verificar errors
// verificar numberos

function esPalindromo(palabra) {
    return palabra === palabra.split("").reverse().join("");
};