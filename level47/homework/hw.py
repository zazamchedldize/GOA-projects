# codewars 1
# def maskify(cc):
#     if len(cc) <= 4:
#         return cc
#     else:
#         return "#" * (len(cc) - 4) + cc[-4:]

# codewars 2
# def check_exam(arr1, arr2):
#     score = 0

#     for i in range(len(arr1)):
#         if arr2[i] == "":
#             score += 0
#         elif arr1[i] == arr2[i]:
#             score += 4
#         else:
#             score -= 1

#     if score < 0:
#         return 0

#     return score

# codewars 3 
# def create_phone_number(n):
#     return "(" + str(n[0]) + str(n[1]) + str(n[2]) + ") " + str(n[3]) + str(n[4]) + str(n[5]) + "-" + str(n[6]) + str(n[7]) + str(n[8]) + str(n[9])

# codewars 4
# def get_middle(s):
#     if len(s) % 2 == 0:
#         return s[len(s)//2 - 1 : len(s)//2 + 1]
#     else:
#         return s[len(s)//2]

# codewars 5
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

#codewars 6
# def get_count(sentence):
#     count = 0
#     vowels = "aeiou"
#     for i in sentence:
#         if i in vowels:
#             count += 1
#     return count