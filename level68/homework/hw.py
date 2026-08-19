# codewars 1
# def reverse_words(text):
#     words = text.split(" ")
    
#     reversed_words = []
    
#     for i in words:
#         reversed_word = i[::-1]
#         reversed_words.append(reversed_word)
    
#     result = " ".join(reversed_words)
    
#     return result

# codewars 2
# def tail_swap(strings):
#     left1, right1 = strings[0].split(":")
#     left2, right2 = strings[1].split(":")
    
#     new_first = left1 + ":" + right2
#     new_second = left2 + ":" + right1
    
#     return [new_first, new_second]

# codewars 3
# def is_pangram(st):
#     st = st.lower()
#     alphabets = "abcdefghijklmnopqrstuvwxyz"
    
#     for i in alphabets:
#         if i not in st:
#             return False
#     return True    
# codewars 6
# def DNA_strand(dna):
#     result = ""

#     for i in dna:
#         if i == "A":
#             result += "T"
#         elif i == "T":
#             result += "A"
#         elif i == "C":
#             result += "G"
#         elif i == "G":
#             result += "C"

#     return result