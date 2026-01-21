# 4) შექმენით სტრინგის ცვლადი და ცარიელი სია. სტრინგში მყოფი დიდი ასოები გახადეთ პატარა და ამ სიაში ჩაამატეთ, ხოლო სტრინგში მყოფი პატარა ასოები გახადეთ დიდი და ასევე ჩააგდეთ ამ სიაში. დაპრინტეთ საბოლოო სია, გამოიყენეთ while ციკლი.

word = "gaMarJoba"
list1 = []

i = 0
while i < len(word):
    if word[i] == word[i].upper():
        list1.append(word[i].lower())
    else:
        list1.append(word[i].upper())
    i += 1

print(list1)
