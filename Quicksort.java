import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class QuickSort {

    public static List<Integer> quickSort(List<Integer> arr) {
        if (arr.size() <= 1) {
            return arr;
        }

        Random rand = new Random();
        int pivotIndex = rand.nextInt(arr.size());
        int pivot = arr.get(pivotIndex);

        List<Integer> left = new ArrayList<>();
        List<Integer> right = new ArrayList<>();

        for (int i = 0; i < arr.size(); i++) {
            int element = arr.get(i);
            if (element < pivot) {
                left.add(element);
            } else if (element > pivot) {
                right.add(element);
            }
        }

        List<Integer> sortedLeft = quickSort(left);
        List<Integer> sortedRight = quickSort(right);

        List<Integer> sortedArray = new ArrayList<>();
        sortedArray.addAll(sortedLeft);
        sortedArray.add(pivot);
        sortedArray.addAll(sortedRight);

        return sortedArray;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite uma lista de números separados por espaço: ");
        String input = scanner.nextLine();
        String[] inputArray = input.split(" ");
        List<Integer> inputList = new ArrayList<>();

        for (String numStr : inputArray) {
            try {
                int num = Integer.parseInt(numStr);
                inputList.add(num);
            } catch (NumberFormatException e) {
                System.out.println("Por favor, insira apenas números válidos.");
                return;
            }
        }

        List<Integer> sortedList = quickSort(inputList);
        System.out.println("Lista ordenada: " + sortedList);
    }
}
