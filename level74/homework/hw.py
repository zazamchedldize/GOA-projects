# #codewars 1
# def break_chocolate(n, m):
#     if n == 0 or m == 0:
#         return 0
#     return n * m - 1

# #codewars 2
# def is_anagram(test, original):
#     test = test.lower()
#     original = original.lower()
#     if len(test) != len(original):
#         return False
#     original_letters = list(original)
#     for letter in test:
#         if letter in original_letters:
#             original_letters.remove(letter)
#         else:
#             return False
#     return True

# codewars 4
# def caffeine_buzz(n):
#     if n % 12 == 0:
#         result = "Coffee"
#     elif n % 3 == 0:
#         result = "Java"
#     else:
#         return "mocha_missing!"

#     if n % 2 == 0:
#         result += "Script"

#     return result