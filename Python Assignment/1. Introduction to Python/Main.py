#1. Write a Python script that accepts user input for name and age and prints a greeting message.

# name = input("Enter your name:")
# age = input("Enter your age:")
# print("Hello " + name + ", you are " + age + " years old")


#2. Create a program to find the largest of three input numbers using conditional statements.

# a = int(input("Enter first number: "))
# b = int(input("Enter second number: "))
# c = int(input("Enter third number: "))

# if a > b and a > c:
#     print("The largest number is:", a)
# elif b > c:
#     print("The largest number is:", b)
# else:
#     print("The largest number is:", c)


#3. Write a script to check if a given year is a leap year.

# year = int(input("Enter a year: "))

# if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
#     print("It's a leap year!")
# else:
#     print("It's not a leap year.")


#4. Develop a Python program that reverses a given integer.

# num = int(input("Enter a number you wanna reverse:"))

# reverse = 0

# while num > 0:
#     digit = num%10
#     reverse = reverse*10 + digit
#     num = num // 10

# print("Reverse is ", reverse)

#5. Write a script that swaps two variables without using a third variable.

# x = int(input("Enter x: "))
# y = int(input("Enter y: "))

# x, y = y, x

# print("Current value of x and y are: ", x, " ", y)

# 6.	Create a program that simulates a simple calculator supporting +, -, *, / with input parsing.

# num1 = float(input("Enter first number: "))
# op = input("Enter operator (+, -, *, /): ")
# num2 = float(input("Enter second number: "))

# if op == "+":
#     print("Result:", num1 + num2)
# elif op == "-":
#     print("Result:", num1 - num2)
# elif op == "*":
#     print("Result:", num1 * num2)
# elif op == "/":
#     print("Result:", num1 / num2)
# else:
#     print("Invalid operator, try again")


#7.	Write a Python script to determine if a given number is a prime number.

# num = int(input("Enter the number:"))
# is_prime = True

# if(num < 2):
#     is_prime = False
# else:
#     for i in range(2, num):
#         if (num % i == 0):
#             is_prime = False
#             break
# if is_prime:
#     print("The number is Prime")
# else:
#     print("The number is composite")


#8.	Develop a program to convert a given temperature from Celsius to Fahrenheit and vice versa.

# print("1: Celsius to Fahrenheit")
# print("2: Fahrenheit to Celsius")
# choice = input("Choose 1 or 2: ")

# if(choice == "1"):
#     c = float(input("Enter temperature in Celsius: "))
#     f = (c * 9/5) + 32
#     print("Temperature in Fahrenheit:", f)
# elif(choice == "2"):
#     f = float(input("Enter the temperature in Fahrenheit"))
#     c = (f - 32) * 5/9
#     print("Temperature in Celsius:", c)
# else:
#     print("Response entered is invalid, try agian")


#9.	Create a Python program that prints the Fibonacci sequence up to n terms using iteration.
# n = int(input("Enter the number of terms you want:"))
# a = 0
# b = 1

# for i in range(n):
#     print(a, end=" ")
#     temp = a + b
#     a = b
#     b = temp



#10. Implement a basic number guessing game where the computer selects a random number.
import random
number = random.randint(1,10)
guess = int(input("Guess a number:"))

if(guess < 1 or guess > 10):
    print("Not in range, try again")
elif(guess != number):
    print("Tough luck, try again")
else:
    print("You guessed it right")