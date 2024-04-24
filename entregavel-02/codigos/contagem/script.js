function exibirNumerosInteiros(min, max) {
    const inicio = min <= max ? min : max;
    const fim = min <= max ? max : min;

    let numerosString = '';

    for (let i = inicio; i <= fim; i++) {
        if (numerosString !== '') {
            numerosString += ', ';
        }
        numerosString += i;
    }

    return {
        numeros: numerosString,
        total: fim - inicio + 1
    };
}

function exibirNumeros() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        const resultado = document.getElementById("resultado");
        resultado.textContent = "Por favor, insira números válidos.";
        return;
    }

    const { numeros, total } = exibirNumerosInteiros(num1, num2);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <p>Números inteiros entre ${num1} e ${num2}:</p>
        <p>Números: ${numeros}</p>
        <p>Total de números: ${total}</p>
    `;
}
