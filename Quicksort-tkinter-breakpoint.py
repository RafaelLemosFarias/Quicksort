import random
import tkinter as tk
from tkinter import messagebox

def quickSort(arr):
    if len(arr) <= 1:
        return arr

    pivot = random.choice(arr)
    left = [x for x in arr if x < pivot]
    right = [x for x in arr if x > pivot]

    return quickSort(left) + [pivot] + quickSort(right)

def sort_array():
    input_str = entry.get()
    inputArray = list(map(int, input_str.split()))

    if any(not isinstance(x, int) for x in inputArray):
        messagebox.showerror("Erro", "Por favor, insira apenas números válidos.")
        return
    

    sortedArray = quickSort(inputArray)
    result_label.config(text=f"Array ordenado: {sortedArray}")

root = tk.Tk()
root.title("QuickSort")
root.geometry("400x200")
root.configure(bg="#f0f0f0")

frame = tk.Frame(root, bg="#ffffff", bd=5)
frame.place(relx=0.5, rely=0.5, anchor="center")

label = tk.Label(frame, text="Digite uma lista de números:", font=("Arial", 12), bg="#ffffff")
label.grid(row=0, column=0, padx=10, pady=5)

entry = tk.Entry(frame, font=("Arial", 12), bd=2, relief="groove")
entry.grid(row=0, column=1, padx=10, pady=5)

sort_button = tk.Button(frame, text="Ordenar", font=("Arial", 12), bg="#4CAF50", fg="#ffffff", bd=2, relief="raised", command=sort_array)
sort_button.grid(row=1, columnspan=2, padx=10, pady=10)

result_label = tk.Label(frame, text="", font=("Arial", 12), bg="#ffffff")
result_label.grid(row=2, columnspan=2, padx=10, pady=5)

root.mainloop()
