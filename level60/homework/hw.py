# codewars 1
# https://www.codewars.com/kata/54da539698b8a2ad76000228/train/python
# def is_valid_walk(walk):
#     if len(walk) != 10:
#         return False
    
#     n = 0
#     s = 0
#     e = 0
#     w = 0
    
#     for step in walk:
#         if step == 'n':
#             n += 1
#         elif step == 's':
#             s += 1
#         elif step == 'e':
#             e += 1
#         elif step == 'w':
#             w += 1
    
#     return n == s and e == w

# codewars 2
# https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/python
# def compute_sum(n):
#     total = 0
    
#     for i in range(1, n + 1):
#         for digit in str(i):
#             total += int(digit)
    
#     return total

# codewars 3
# https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/python
# def delete_nth(order, max_e):
#     result = []
    
#     for i in order:
#         if result.count(i) < max_e:
#             result.append(i)
    
#     return result

# codewars 4
# https://www.codewars.com/kata/541c8630095125aba6000c00/train/python



# codewars 5
# https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/python
# def clean_string(s):
#     result = []
    
#     for i in s:
#         if i != '#':
#             result.append(i)
#         else:
#             if result:
#                 result.pop()
    
#     return ''.join(result)