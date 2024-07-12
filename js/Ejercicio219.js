/* 2.19 Escribir un algoritmo para determinar el máximo común divisor de dos números enteros (MCD) por el algoritmo de Euclides: 
-Dividir el mayor de los dos enteros positivos por el mas pequeño, -A continuación dividir el divisor por el resto2 */ 
let formulario = document.querySelector("#formulario");
let num1Input = document.querySelector("#num1");
let num2Input = document.querySelector("#num2");
let resultado = document.querySelector("#resultado");
let msgerror = document.querySelector("#error");

let calcularMCD = (a, b) => {
    let nums = [];
    while (b !== 0) {
        let temp = b;
        let r = a % b;
        nums.push({ a, b, r });
        a = temp;
        b = r;
    }
    return { mcd: a, nums };
}

let imprimirResultado = (dato) => {
    let { mcd, nums } = dato;
    let msg = `<br><br><h2>El MCD es: ${mcd}</h2>`;
    msg += "<table class='table table-bordered'><thead><tr><th>A</th><th>B</th><th>Resto</th></tr></thead><tbody>";
    nums.forEach(step => {
        msg += `<tr><td>${step.a}</td><td>${step.b}</td><td>${step.r}</td></tr>`;
    });
    msg += "</tbody></table>";
    resultado.innerHTML = msg;
}

formulario.addEventListener("submit", (event) => {
    let centinela = false;
    let error = "";
    let num1 = parseInt(num1Input.value);
    let num2 = parseInt(num2Input.value);

    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        error = "Ingrese números mayores a 0.";
        centinela = true;
    }

    if (centinela) {
        msgerror.innerHTML = error;
    } else {
        let dato = calcularMCD(num1, num2);
        imprimirResultado(dato);
        limpiar();
    }

    event.preventDefault();
});

let limpiar = () => {
    num1Input.value = "";
    num2Input.value = "";
    num1Input.focus();
    msgerror.innerHTML = "";
}
