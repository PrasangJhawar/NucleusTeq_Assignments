# 1. Write a function to calculate the factorial of a number (non-recursive).

def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

num = int(input("Enter a number to find its factorial: "))
print("Factorial:", factorial(num))


# 2. Define a function that checks whether a string is a palindrome.

def is_palindrome(s):
    return s == s[::-1]

text = input("Enter a string:")
if is_palindrome(text):
    print("It's a palindrome")
else:
    print("It's not a palindrome")


# 3. Write a function that accepts a list and returns the sum and average of the numbers.
def sum_and_average(numbers):
    total = sum(numbers)
    average = total / len(numbers)
    return total, average

list = [1,2,3,4,5,6]
total, average = sum_and_average(list)
print(f"Sum: {total}, Average: {average}")

# 4. Create a function that returns the nth Fibonacci number using recursion.

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

n = int(input("Enter a number:"))
print(f"The {n}th fibonacci number is:", fibonacci(n))


# 5. Define a function to count the number of vowels in a given string.

def count_vowels(s):
    vowels = "aeiouAEIOU"
    count = 0
    for i in s:
        if(i in vowels):
            count = count+1
    return count

str = "Hello"
print(f"Vowels are: {count_vowels(str)}")

# 6. Implement a decorator that measures execution time of any function.

import time

def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Execution time: {end - start:.6f} seconds")
        return result
    return wrapper

@timer_decorator
def example_function():
    time.sleep(1)
    print("Function executed")

example_function()


# 7. Write a recursive function to solve the Tower of Hanoi problem.

def tower_of_hanoi(n, source, temp, target):
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
    else:
        tower_of_hanoi(n - 1, source, target, temp)
        print(f"Move disk {n} from {source} to {target}")
        tower_of_hanoi(n - 1, temp, source, target)

n = int(input("Enter number of disks: "))
tower_of_hanoi(n, 'A', 'B', 'C')


#8. Implement a function that uses variable-length arguments to sum any number of inputs.

def sum_all(*args):
    return sum(args)

numbers = [1,2,3,4,5]
print("Sum:", sum_all(*numbers))


# 9. Write a function that flattens a nested list using recursion.

def flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

nested = eval(input("Enter a nested list (e.g. [1, [2, [3, 4]]]): "))
print("Flattened list:", flatten(nested))

# 10. Implement a memoized version of the Fibonacci sequence.

def dp_fibonacci(n):
    if n <= 1:
        return n
    fib = [0] * (n + 1)
    fib[1] = 1
    for i in range(2, n + 1):
        fib[i] = fib[i - 1] + fib[i - 2]
    return fib[n]

n = int(input("Enter the position (n) of Fibonacci number: "))
print(f"The {n}th Fibonacci number is:", dp_fibonacci(n))

