let num1
let num2
let operacion

let calcular = (num1, num2, operacion) => {

    if (typeof num1 === 'number' && typeof num2 === 'number' && num1 != null && num2 != null) {
        switch (operacion) {
            case "suma":
                return num1 + num2
                break;
            case "resta":
                return num1 - num2
                break;
            case "multiplicacion":
                return num1 * num2
                break;
            case "division":
                return num1 / num2
                break;
        }
    } else {
        console.log("El valor ingresado no es numerico");
    }
}

console.log(calcular(3, 2, "suma"));
console.log(calcular(2, null, 'suma'));
console.log(calcular('a', 3, 'resta'));
console.log(calcular(5, 2.3, 'multiplicacion'));
console.log(calcular(20, 0, 'division'));
console.log(calcular());



