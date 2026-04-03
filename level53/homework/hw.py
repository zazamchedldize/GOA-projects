# codewars 1
# https://www.codewars.com/kata/5412509bd436bd33920011bc
# def maskify(cc):
#     if len(cc) <= 4:
#         return cc
#     else:
#         return "#" * (len(cc) - 4) + cc[-4:]

# codewars 2
# https://www.codewars.com/kata/570a6a46455d08ff8d001002
# def no_boring_zeros(n):
#     s = str(n).rstrip("0")
    
#     if s == "":
#         return 0
#     else:
#         return int(s)

# codewars 3
#  https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
# def warn_the_sheep(queue):
#     for i in range(len(queue)):
#         if queue[i] == "wolf":
#             if i == len(queue) - 1:
#                 return "Pls go away and stop eating my sheep"
#             else:
#                 n = len(queue) - i - 1
#                 return "Oi! Sheep number " + str(n) + "! You are about to be eaten by a wolf!"

# codewars 4
# https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
# def number(lines):
#     numbered_lines = []
#     for i in range(len(lines)):
#         numbered_lines.append(str(i + 1) + ": " + lines[i])
#     return numbered_lines

# codewars 5
#  https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
#  def distinct(seq):
#     new_list = []
#     for i in seq:
#         if i not in new_list:
#             new_list.append(i)
#     return new_list

# codewars 6
# https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
# def human_years_cat_years_dog_years(humanYears):
#     if humanYears == 1:
#         catYears = 15
#     elif humanYears == 2:
#         catYears = 24
#     else:
#         catYears = 24 + (humanYears - 2) * 4
        
#     if humanYears == 1:
#         dogYears = 15
#     elif humanYears == 2:
#         dogYears = 24
#     else:
#         dogYears = 24 + (humanYears - 2) * 5
        
#     return [humanYears, catYears, dogYears]

