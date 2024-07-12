document.addEventListener('DOMContentLoaded', (event) => {
    let resultado = document.querySelector("#resultado");

    let imprimirSerieYSuma = () => {
        let suma = 0;
        let tabla = "<table class='table table-bordered'><thead><tr><th>Número</th><th>Suma Acumulada</th></tr></thead><tbody>";

        for (let i = 3; i <= 99; i += 3) {
            suma += i;
            tabla += `<tr><td>${i}</td><td>${suma}</td></tr>`;
        }

        tabla += "</tbody></table>";

        let msg = "<h3>Serie de números y suma acumulada:</h3>";
        msg += tabla;

        resultado.innerHTML = msg;
    }

    imprimirSerieYSuma();
});
