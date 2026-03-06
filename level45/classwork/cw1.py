#codewars 1
# def count_positives_sum_negatives(arr):
#     if not arr:  
#         return []
    
#     count = 0
#     n_sum = 0   
    
#     for i in arr:
#         if i > 0:
#             count += 1
#         elif i < 0:
#             n_sum += i
    
#     return [count, n_sum]

# codewars 2
# def count_sheep(n):
#     word = ''
#     for i in range(1, n + 1):
#         word += str(i) + ' sheep...'
#     return word

#codewars 3
# def likes(names):
#     if len(names) == 0:
#         return "no one likes this"
#     elif len(names) == 1:
#         return names[0] + " likes this"
#     elif len(names) == 2:
#         return names[0] + " and " + names[1] + " like this"
#     elif len(names) == 3:
#         return names[0] + ", " + names[1] + " and " + names[2] + " like this"
#     else:
#         return names[0] + ", " + names[1] + " and " + str(len(names)-2) + " others like this"

# codewars 4
# def friend(x):
#     new = []
#     for i in x:
#         if len(i) == 4:
#             new.append(i)
#     return new
