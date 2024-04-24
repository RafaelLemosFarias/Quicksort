function calcularSoma() {
    const input = document.getElementById("numeros").value;
    const numeros = input.split(",");
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        const numero = parseFloat(numeros[i].trim());
        
        if (!isNaN(numero)) {
            soma += numero;
        }
    }

    const resultado = document.getElementById("resultado");
    resultado.textContent = "A soma dos números é: " + soma;
}
