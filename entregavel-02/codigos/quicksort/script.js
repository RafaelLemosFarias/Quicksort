function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

function ordenarArray() {
    const input = document.getElementById("numeros").value;
    const inputArray = input.split(" ").map(Number);

    if (inputArray.some(isNaN)) {
        const resultado = document.getElementById("resultado");
        resultado.textContent = "Por favor, insira apenas números válidos.";
        return;
    }

    const sortedArray = quickSort(inputArray);
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Array ordenado: " + sortedArray.join(", ");
}
