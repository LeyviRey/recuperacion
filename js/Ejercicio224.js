/*2.24 Escribir un algoritmo que cuente el numero de ocurrencias de cada letra en una plabra leida como entrada. Por ejemplo
<<Mortimer>>  contiene dos <<m>>, una <<o>>, dos <<r>>, una <<y>>, una <<t>> y una <<e>>*/

function contador() {
    let palabra = document.getElementById('palabraText').value.toLowerCase();
    let contadorLetras = {};
    let i = 0;

    while (i < palabra.length) {
        let letra = palabra[i];
        if (contadorLetras[letra]) {
            contadorLetras[letra]++;
        } else {
            contadorLetras[letra] = 1;
        }
        i++;
    }

    let resultD = document.getElementById('resultado');
    resultD.innerHTML = '<br><h2>Contiene:</h2>';
    let tabla = "<table class='table table-bordered'><thead><tr><th>Letra</th><th>Conteo</th></tr></thead><tbody>";

    for (let letra in contadorLetras) {
        let contador = contadorLetras[letra];
        let contadorText = contador === 1 ? 'Una' : contador === 2 ? 'Dos' : contador === 3 ? 'Tres' : contador === 4 ? 'Cuatro' : contador === 5 ? 'Cinco' : contador;
        tabla += `<tr><td>${letra}</td><td>${contadorText}</td></tr>`;
    }

    tabla += "</tbody></table>";
    resultD.innerHTML += tabla;
}
