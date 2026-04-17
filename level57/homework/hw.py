# codewars 1
# https://www.codewars.com/kata/525f50e3b73515a6db000b83
# def create_phone_number(n):
#     return "(" + str(n[0]) + str(n[1]) + str(n[2]) + ") " + str(n[3]) + str(n[4]) + str(n[5]) + "-" + str(n[6]) + str(n[7]) + str(n[8]) + str(n[9])

# codewars 3
#  https://www.codewars.com/kata/5aa1bcda373c2eb596000112
# def max_tri_sum(numbers):
#     return sum(sorted(set(numbers), reverse=True)[:3])

# codewars 4
# https://www.codewars.com/kata/5783d8f3202c0e486c001d23
# def to_float_array(arr):
#     result = []
#     for i in arr:
#         result.append(float(i))
#     return result

# codewars 5
# https://www.codewars.com/kata/59cfc000aeb2844d16000075
# def capitalize(s):
#     even = ""
#     odd = ""

#     for i in range(len(s)):
#         if i % 2 == 0:
#             even += s[i].upper()
#             odd += s[i].lower()
#         else:
#             even += s[i].lower()
#             odd += s[i].upper()

#     return [even, odd]

# codewars 6
# https://www.codewars.com/kata/5a4138acf28b82aa43000117
# def adjacent_element_product(array):
#     max_product = array[0] * array[1]

#     for i in range(len(array) - 1):
#         product = array[i] * array[i + 1]
#         if product > max_product:
#             max_product = product

#     return max_product


# codewars 7
#  https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763
# def show_sequence(n):
#     if n < 0:
#         return str(n) + "<0"
#     if n == 0:
#         return "0=0"

#     total = 0
#     result = ""

#     for i in range(n + 1):
#         total += i
#         result += str(i)
#         if i != n:
#             result += "+"

#     result += " = " + str(total)
#     return result


# codewars 8
#  https://www.codewars.com/kata/51675d17e0c1bed195000001
# def solution(s):
#     max_num = 0

#     for i in range(len(s) - 4):
#         num = int(s[i:i+5])
#         if num > max_num:
#             max_num = num

#     return max_num


# codewars 9
# https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/python
# def factorial(n):
#     result = 1
#     for i in range(1, n + 1):
#         result *= i
#     return result


