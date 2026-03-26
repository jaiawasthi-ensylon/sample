import tkinter as tk

root = tk.Tk()
root.title("Dark Mode Toggle")

is_dark = False

def toggle_mode():
    global is_dark
    if is_dark:
        root.config(bg="white")
        button.config(bg="lightgray", fg="black")
        is_dark = False
    else:
        root.config(bg="black")
        button.config(bg="gray", fg="white")
        # BUG: Forgot to update is_dark here!
        is_dark = True

button = tk.Button(root, text="Toggle Dark Mode", command=toggle_mode)
button.pack(pady=20)

root.mainloop()