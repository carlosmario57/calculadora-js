// Importar el módulo prompt-sync
const prompt = require('prompt-sync')();

// Función para realizar operaciones básicas
function realizarOperacion(num1, num2, operacion) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: división por cero';
        default:
            return 'Operación no válida';
    }
}

// Mostrar mensaje inicial
console.log("Calculadora Básica en JavaScript (Node.js)");
console.log("Escriba 'salir' en cualquier momento para terminar.\n");

while (true) {
    // Leer primer número
    let entrada1 = prompt("Ingrese el primer número: ");
    if (entrada1.toLowerCase() === "salir") break;
    let numero1 = parseFloat(entrada1);

    // Leer segundo número
    let entrada2 = prompt("Ingrese el segundo número: ");
    if (entrada2.toLowerCase() === "salir") break;
    let numero2 = parseFloat(entrada2);

    // Leer operación
    let operacion = prompt("Ingrese la operación (+, -, *, /): ");
    if (operacion.toLowerCase() === "salir") break;

    // Mostrar resultado
    const resultado = realizarOperacion(numero1, numero2, operacion);
    console.log(`Resultado: ${resultado}\n`);
}

// Mensaje de salida
console.log("\nGracias por usar la calculadora. ¡Hasta luego!");
