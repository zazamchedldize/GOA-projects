# codewars 1
# def spacey(array):
#     result = []
#     current = ""

#     for word in array:
#         current += word
#         result.append(current)

#     return result


# codewars 2
# def cube_odd(arr):
#     total = 0

#     for i in arr:
#         if type(i) != int and type(i) != float:
#             return None

#         cube = i ** 3

#         if cube % 2 != 0:
#             total += cube

#     return total


# codewars 3
# def solve(s):
#     upper = 0
#     lower = 0
#     numbers = 0
#     special = 0

#     for i in s:
#         if i.isupper():
#             upper += 1
#         elif i.islower():
#             lower += 1
#         elif i.isdigit():
#             numbers += 1
#         else:
#             special += 1

#     return [upper, lower, numbers, special]


# codewars 4
# class List:
#     def remove_(self, integer_list, values_list):
#         result = []

#         for i in integer_list:
#             if i not in values_list:
#                 result.append(i)

#         return result

# codewars 6
# def last(x):
#     words = x.split()
#     words.sort(key=lambda word: word[-1])
#     return words

# codewars 8
# def solve(s):
#     vowels = "aeiou"
#     current = 0
#     max_len = 0

#     for i in s:
#         if i in vowels:
#             current += 1
#             if current > max_len:
#                 max_len = current
#         else:
#             current = 0

#     return max_len

# codewars 9
# def password(s):
#     upper = False
#     lower = False
#     digit = False

#     if len(s) < 8:
#         return False

#     for i in s:
#         if i.isupper():
#             upper = True
#         elif i.islower():
#             lower = True
#         elif i.isdigit():
#             digit = True

#     return upper and lower and digit