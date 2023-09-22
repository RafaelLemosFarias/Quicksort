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
  
  function main() {
    const input = prompt("Digite uma lista de números separados por espaço:");
    const inputArray = input.split(" ").map(Number);
  
    if (inputArray.some(isNaN)) {
      console.log("Por favor, insira apenas números válidos.");
      return;
    }
  
    const sortedArray = quickSort(inputArray);
    console.log("Array ordenado:", sortedArray);
  }
  
  main();
  