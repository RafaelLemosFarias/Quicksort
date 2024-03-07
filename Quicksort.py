import random

def quickSort(arr):
    if len(arr) <= 1:
        return arr

    pivot = random.choice(arr)
    left = [x for x in arr if x < pivot]
    right = [x for x in arr if x > pivot]

    return quickSort(left) + [pivot] + quickSort(right)

def main():
    input_str = input("Digite uma lista de números separados por espaço: ")
    inputArray = list(map(int, input_str.split()))

    if any(not isinstance(x, int) for x in inputArray):
        print("Por favor, insira apenas números válidos.")
        return

    sortedArray = quickSort(inputArray)
    print("Array ordenado:", sortedArray)

if __name__ == "__main__":
    main()
