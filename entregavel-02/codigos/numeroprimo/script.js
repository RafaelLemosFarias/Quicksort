function Primo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function verificarPrimo() {
  const numeroInput = document.getElementById("numero").value;
  const numero = parseInt(numeroInput);

  const resultado = document.getElementById("resultado");

  if (isNaN(numero)) {
      resultado.textContent = "Por favor, insira um número válido.";
  } else {
      if (Primo(numero)) {
          resultado.textContent = numero + " é primo.";
      } else {
          resultado.textContent = numero + " não é primo.";
      }
  }
}
