function calcularMDC(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function obterEntradaDoUsuario() {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    return [numero1, numero2];
}

function exibirResultadoMDC(mdc) {
    const resultado = document.getElementById("resultado");
    resultado.textContent = `O MDC dos números é: ${mdc}`;
}

function calcularEMostrarMDC() {
    const [numero1, numero2] = obterEntradaDoUsuario();
    
    if (isNaN(numero1) || isNaN(numero2)) {
        const resultado = document.getElementById("resultado");
        resultado.textContent = "Por favor, insira números válidos.";
        return;
    }

    const mdc = calcularMDC(numero1, numero2);
    exibirResultadoMDC(mdc);
}
