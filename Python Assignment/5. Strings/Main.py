# 1. Write a function that capitalizes the first letter of each word in a string.

text = "hello from nucleusTeq"
print("Capitalized:", text.title())


# 2. Create a program that finds all substrings of a given string.

s = "abc"
substrings = []
for i in range(len(s)):
    for j in range(i + 1, len(s) + 1):
        substrings.append(s[i:j])
print("Substrings:", substrings)


# 3. Write a function that replaces all vowels in a string with '*' symbol.

def replace_vowels(text):
    vowels = "aeiouAEIOU"
    return ''.join('*' if char in vowels else char for char in text)

s = "Hello World"
print("Without vowels:", replace_vowels(s))


# 4. Develop a function that counts words, characters, and lines in a string.

def count_text_details(text):
    lines = text.splitlines()
    words = text.split()
    chars = len(text)
    return len(lines), len(words), chars

s = "Hello world\nWelcome to Python"
lines, words, chars = count_text_details(s)
print("Lines:", lines)
print("Words:", words)
print("Characters:", chars)


# 5. Write a script to format a number as currency (e.g., 1000000 -> 1,000,000).

num = 1000000
formatted = "{:,}".format(num)
print("Formatted:", formatted)


# 6. Implement a function that validates a strong password based on given criteria.

def is_strong_password(pwd):
    if len(pwd) < 8:
        return False
    has_upper = any(c.isupper() for c in pwd)
    has_lower = any(c.islower() for c in pwd)
    has_digit = any(c.isdigit() for c in pwd)
    has_special = any(c in "!@#$%^&*()_+-=" for c in pwd)
    return has_upper and has_lower and has_digit and has_special

password = "Strong@123"
print("Is strong password:", is_strong_password(password))


# 7. Write a script that encodes a string using Caesar cipher.

text = "Hi"
shift = 3
result = ""
for char in text:
    if char.isalpha():
        base = ord('A') if char.isupper() else ord('a')
        shifted = (ord(char) - base + shift) % 26 + base
        result += chr(shifted)
    else:
        result += char
print("Encoded:", result)


# 8. Create a function to remove HTML tags from a string.

import re

def remove_html(text):
    return re.sub(r'<.*?>', '', text)

html = "<p>This is a paragraph.</p>"
print(remove_html(html))


# 9. Develop a function that finds the longest palindromic substring.

def longest_palindrome(s):
    result = ""
    for i in range(len(s)):
        for j in range(i, len(s)):
            temp = s[i:j+1]
            if temp == temp[::-1] and len(temp) > len(result):
                result = temp
    return result

s = "racecarontrack"
print("Longest palindrome:", longest_palindrome(s))


# 10. Implement a string compression algorithm (e.g., aabcccccaaa -> a2b1c5a3).

def compress_string(s):
    result = ""
    count = 1
    for i in range(1, len(s)):
        if s[i] == s[i-1]:
            count += 1
        else:
            result += s[i-1] + str(count)
            count = 1
    result += s[-1] + str(count)
    return result

s = "aabcccccaaa"
print("Compressed:", compress_string(s))
