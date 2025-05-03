// Importar el módulo prompt-sync
const prompt = require('prompt-sync')();

// Función para realizar operaciones básicas
function realizarOperacion(num1, num2, operacion) {
    switch (operacion) {
        case '+':
        case 'suma':
            return num1 + num2;
        case '-':
        case 'resta':
            return num1 - num2;
        case '*':
        case 'multiplicacion':
            return num1 * num2;
        case '/':
        case 'division':
            return num2 !== 0 ? num1 / num2 : 'Error: división por cero';
        default:
            return 'Operación no válida';
    }
}

// Mostrar mensaje inicial
console.log("Calculadora Básica en JavaScript (Node.js)");
console.log("Puedes usar: +, -, *, / o las palabras: suma, resta, multiplicacion, division");
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
    let operacion = prompt("Ingrese la operación (+, -, *, / o nombre): ");
    if (operacion.toLowerCase() === "salir") break;

    // Mostrar resultado
    const resultado = realizarOperacion(numero1, numero2, operacion.toLowerCase());
    console.log(`Resultado: ${resultado}\n`);

    // Preguntar si desea continuar
    let continuar = prompt("¿Desea realizar otra operación? (si/no): ");
    if (continuar.toLowerCase() !== "si") {
        console.log("Gracias por usar la calculadora. ¡Hasta luego!");
        break;
    }
}
