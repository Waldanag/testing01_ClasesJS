/** Prueba con fn basica de suma */

function suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 0;
    } else {
        return a + b;
    }
}

function restar(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 0;
    } else {
        return a - b;
    }



}

function multiplicar(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 0;
    } else {
        return a * b;
    }
}
function dividir(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 0;
    } else {
        return a / b;
    }
}



module.exports = { suma, restar, dividir, multiplicar };
