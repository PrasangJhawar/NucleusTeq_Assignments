# 1. Implement a function to reverse a list without using built-in reverse().

def reverse_list(list):
    l = []
    for i in range(0, len(list)):
        l.append(list[len(list)-i-1])
    return l

list = [1,2,3,4]
print(reverse_list(list))

# 2. Write a function to merge two dictionaries.

def merge_dicts(dict1, dict2):
    merged = dict1.copy()
    merged.update(dict2)
    return merged

d1 = {'a': 1, 'b': 2}
d2 = {'c': 3, 'd': 4}
print("Merged Dictionary:", merge_dicts(d1, d2))


# 3. Develop a function that removes duplicate elements from a list.

def remove_duplicates(lst):
    return list(set(lst))

numbers = [1, 2, 2, 3, 4, 4, 5]
print("List without duplicates:", remove_duplicates(numbers))


# 4. Create a function that counts the frequency of each word in a list.

def word_frequency(words):
    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1
    return freq

word_list = ["apple", "banana", "apple", "orange", "banana", "apple"]
print("Word Frequencies:", word_frequency(word_list))


# 5. Write a program to sort a list of tuples based on the second element.

def sort_by_second(tuples):
    return sorted(tuples, key=lambda x: x[1])

data = [(1, 3), (2, 1), (4, 5), (3, 2)]
print("Sorted Tuples:", sort_by_second(data))


# 6. Implement a stack using list with push, pop, and peek operations.

class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        if self.stack:
            return self.stack.pop()
        return "Stack is empty"

    def peek(self):
        if self.stack:
            return self.stack[-1]
        return "Stack is empty"

s = Stack()
s.push(10)
s.push(20)
print("Top item:", s.peek())
print("Popped:", s.pop())


# 7. Create a queue using collections.deque and implement enqueue and dequeue.

from collections import deque

class Queue:
    def __init__(self):
        self.queue = deque()

    def enqueue(self, item):
        self.queue.append(item)

    def dequeue(self):
        if self.queue:
            return self.queue.popleft()
        return "Queue is empty"

q = Queue()
q.enqueue("A")
q.enqueue("B")
print("Dequeued:", q.dequeue())
print("Queue now:", list(q.queue))


# 8. Write a function to find the intersection of two lists.

def intersection(list1, list2):
    return list(set(list1) & set(list2))

a = [1, 2, 3, 4]
b = [3, 4, 5, 6]
print("Intersection:", intersection(a, b))


# 9. Create a program that uses a dictionary to implement a phonebook.

def phonebook():
    pb = {}
    pb["Elon"] = "12345"
    pb["Bill"] = "67890"
    name = input("Enter name to search: ")
    if name in pb:
        print("Number:", pb[name])
    else:
        print("Name not found.")

phonebook()


# 10. Implement a function to check if a list is a palindrome.

def is_palindrome(list):
    return list == list[::-1]

l = [1, 2, 1]
print(is_palindrome(l))
