# # codewars 1 
# https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/solutions/python
# def find_average(numbers):
#     if len(numbers) == 0: 
#         return 0
#     total = 0
#     for num in numbers: 
#         total += num
#     return total / len(numbers)

# codewars 2
# https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1/solutions/python
# def is_kiss(words):
#     words_list = words.split()
#     word_count = len(words_list)
    
#     for word in words_list:
#         if len(word) > word_count:
#             return "Keep It Simple Stupid"
#     return "Good work Joe!"

# codewars 3
# https://www.codewars.com/kata/57cc975ed542d3148f00015b/solutions/python
# def check(seq, elem):
#     return elem in seq

# codewars 4 
# https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/solutions/python
# def calculate(num1, operation, num2):
#     if operation == "+":
#         return num1 + num2
#     elif operation == "-":
#         return num1 - num2
#     elif operation == "*":
#         return num1 * num2
#     elif operation == "/":
#         if num2 == 0:
#             return None
#         return num1 / num2
#     else:
#         return None

# codewars 5
# https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python
# def repeat_str(repeat, string):
#     return string * repeat