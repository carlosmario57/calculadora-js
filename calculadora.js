const realizarOperacion = (num1, num2, operacion) => {
    if (operacion == "suma") {
        return num1 + num2;
    } 
    else if (operacion == "resta") {
        return num1 - num2;
    }
    else if (operacion == "multiplicacion") {
        return num1 * num2;
    }
    else if (operacion == "division") {
        if (num2 == 0) {
            return "No es posible dividir por cero";
        }
        return num1 / num2;
    }
    else {
        return "Operación no válida";
    }
}

let num1, num2, operacion;
let pregunta;

while (operacion != "salir") {
    num1 = prompt("Ingrese el primer número:");
    num2 = prompt("Ingrese el segundo número:");
    operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");

    console.log("Resultado:");
    console.log(realizarOperacion(+num1, +num2, operacion));

    pregunta = prompt("¿Desea realizar otra operación? (si/no)");
    if (pregunta != "si") {
        console.log("Gracias por usar la calculadora. ¡Hasta luego!");
        break;
    }
}
