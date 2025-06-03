# 1. Create a custom module with functions to add, subtract, multiply, and divide two numbers.
# import mymath

# a = 10
# b = 5
# print("Add:", mymath.add(a, b))
# print("Subtract:", mymath.subtract(a, b))
# print("Multiply:", mymath.multiply(a, b))
# print("Divide:", mymath.divide(a, b))


# 2. Use the `math` module to calculate square root, factorial, and power of a number.

# import math
# num = 5
# print("Square Root:", math.sqrt(num))
# print("Factorial:", math.factorial(num))
# print("Power (5^3):", math.pow(num, 3))


# 3. Write a program that uses `random` to generate a password of given length.

# import random
# import string

# length = int(input("Enter password length: "))
# characters = string.ascii_letters + string.digits
# password = ''.join(random.choice(characters) for _ in range(length))
# print("Generated Password:", password)

# 4. Create a program using the `datetime` module to display the current date and time.

# import datetime

# now = datetime.datetime.now()
# print("Current Date and Time:", now.strftime("%Y-%m-%d %H:%M:%S"))


# # 5. Import a custom module and use its functions in another script.

# from mymath import multiply, divide
# print("Multiply:", multiply(4, 3))
# print("Divide:", divide(10, 2))

# 6. Build a command-line utility using `argparse` to perform arithmetic operations.


# 7. Create and use a package with multiple modules in it.

# from my_package import square, upper

# print("Square:", square.square(4))
# print("Shout:", upper.shout("hello"))


# 8. Develop a program that uses `os` and `sys` modules to list files and command-line args.

# import os
# import sys

# print("Files in current directory:")
# for f in os.listdir('.'):
#     print(f)

# print("\nCommand-line arguments:")
# for arg in sys.argv:
#     print(arg)


# 9. Use `importlib` to dynamically import a module and invoke a function.

# import importlib

# module_name = "math"
# func_name = "sqrt"

# mod = importlib.import_module(module_name)
# func = getattr(mod, func_name)
# print("Square root of 16 is:", func(16))


# 10. Implement a Python script that uses `glob` to search for all `.txt` files in a directory.

import glob

txt_files = glob.glob("*.txt")
print("Text files in current directory:")
for file in txt_files:
    print(file)

