/*2.13 Diseñar un algoritmo que calcule el área e un triangulo en función de las longitudes de sus lados:
Area = p sqrt (p-a) (p-b)(p-c) donde p = (a+b+c)/2 */ 
document.addEventListener('DOMContentLoaded', (event) => {
    let formulario = document.querySelector("#formulario");
    let lado1Input = document.querySelector("#lado1");
    let lado2Input = document.querySelector("#lado2");
    let lado3Input = document.querySelector("#lado3");
    let tabla = document.querySelector("#tabla");
    let msgerror = document.querySelector("#error");

    let calcularArea = (a, b, c) => {
        let sum = (a + b + c) / 2;
        return Math.sqrt(sum * (sum - a) * (sum - b) * (sum - c));
    }

    let imprimir = (a, b, c, area) => {
        let msg = "<table class='table table-bordered'><thead><th>Lado A</th><th>Lado B</th><th>Lado C</th><th>Área</th></thead>";
        msg += "<tbody>";
        msg += "<tr>";
        msg += `<td>${a}</td>`;
        msg += `<td>${b}</td>`;
        msg += `<td>${c}</td>`;
        msg += `<td>${area.toFixed(2)}</td>`;
        msg += "</tr>";
        msg += "</tbody></table>";
        tabla.innerHTML = msg;
    }

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        let centinela = false;
        let error = "";
        let lado1 = parseFloat(lado1Input.value);
        let lado2 = parseFloat(lado2Input.value);
        let lado3 = parseFloat(lado3Input.value);

        if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
            error = "Ingrese valores validos para los lados del triángulo.";
            centinela = true;
        } else if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
            error = "Los lados ingresados no forman un triángulo válido.";
            centinela = true;
        }

        if (centinela) {
            msgerror.innerHTML = error;
        } else {
            let area = calcularArea(lado1, lado2, lado3);
            imprimir(lado1, lado2, lado3, area);
            limpiar();
        }
    });

    let limpiar = () => {
        lado1Input.value = "";
        lado2Input.value = "";
        lado3Input.value = "";
        lado1Input.focus();
        msgerror.innerHTML = "";
    }
});
