let graficoDoughnut, graficoBar, graficoLine;

function calcularPorcentaje() {
    const porcentaje = parseFloat(document.getElementById("porcentaje").value);
    const cantidad = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(porcentaje) || isNaN(cantidad)) {
        alert("Por favor ingresa valores válidos.");
        return;
    }

    const resultado = (porcentaje / 100) * cantidad;
    document.getElementById("resultado1").innerText = `✅ ${porcentaje}% de ${cantidad} es ${resultado.toFixed(2)}`;

    const data = [resultado, cantidad - resultado];
    const etiquetas = [`${porcentaje}%`, `Resto (${(100 - porcentaje)}%)`];

    mostrarTodosLosGraficos(data, etiquetas);
}

function calcularDescuento() {
    const descuento = parseFloat(document.getElementById("inputDescuento").value);
    const precioOriginal = parseFloat(document.getElementById("inputPrecioOriginal").value);

    if (isNaN(descuento) || isNaN(precioOriginal) || precioOriginal === 0) {
        alert("Por favor ingresa valores válidos.");
        return;
    }

    const descuentoCalculado = (descuento / 100) * precioOriginal;
    const precioFinal = precioOriginal - descuentoCalculado;
    document.getElementById("resultado2").innerText = `💸 Con el ${descuento}% de descuento tù pagas ${precioFinal.toFixed(2)} (te ahorras $${descuentoCalculado.toFixed(2)})`;

    const data = [precioFinal, descuentoCalculado];
    const etiquetas = ["Precio Final", `Descuento (${descuento}%)`];

    mostrarTodosLosGraficos(data, etiquetas);
}

function mostrarTodosLosGraficos(data, etiquetas) {
    // Doughnut
    if (graficoDoughnut instanceof Chart) graficoDoughnut.destroy();
    graficoDoughnut = new Chart(document.getElementById("graficoDoughnut").getContext("2d"), {
        type: "doughnut",
        data: {
            labels: etiquetas,
            datasets: [{
                data: data,
                backgroundColor: ["#36A2EB", "#FFCE56"],
                hoverOffset: 10
            }]
        }
    });

    // Bar
    if (graficoBar instanceof Chart) graficoBar.destroy();
    graficoBar = new Chart(document.getElementById("graficoBar").getContext("2d"), {
        type: "bar",
        data: {
            labels: etiquetas,
            datasets: [{
                data: data,
                backgroundColor: ["#36A2EB", "#FFCE56"]
            }]
        }
    });

    // Line
    if (graficoLine instanceof Chart) graficoLine.destroy();
    graficoLine = new Chart(document.getElementById("graficoLine").getContext("2d"), {
        type: "line",
        data: {
            labels: etiquetas,
            datasets: [{
                data: data,
                backgroundColor: "#36A2EB",
                borderColor: "#36A2EB",
                fill: false,
                tension: 0.3
            }]
        }
    });
}
