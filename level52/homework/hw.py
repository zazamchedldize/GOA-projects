# codewars 1
# https://www.codewars.com/kata/514b92a657cdc65150000006
# def solution(number):
#     if number < 0:
#         return 0
    
#     total = 0
    
#     for i in range(number):
#         if i % 3 == 0 or i % 5 == 0:
#             total += i
    
#     return total

# codewars 2
#  https://www.codewars.com/kata/5a3dd29055519e23ec000074
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
# https://www.codewars.com/kata/554b4ac871d6813a03000035
# def high_and_low(numbers):
#     nlist = numbers.split()
#     new_min = int(nlist[0])
#     new_max = int(nlist[0])

#     for i in nlist:
#         if int(i) < new_min:
#             new_min = int(i)
#         elif int(i) > new_max:
#             new_max = int(i)

#     return str(new_max) + " " + str(new_min)

# codewars 4
# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
# def find_short(s):
#     words = s.split()
    
#     shortest = len(words[0])
    
#     for word in words:
#         if len(word) < shortest:
#             shortest = len(word)
    
#     return shortest

