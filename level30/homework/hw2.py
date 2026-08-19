# 2) შექმენით სიტყვებით სავსე სია, თუ სიტყვის ყველა ასო არის პატარა, ანუ წერია lowercase-ში, ამ სიტყვის ყველა ასო გახადეთ დიდი.
# თუ სიტყვა შეიცავს თუნდაც ერთ uppercase ასოს, ეს სიტყვა ამოშალეთ სიიდან. ბოლოს დაპრინტეთ მიღებული სია. (არ შექმნათ ახალი სია, იმუშავეთ იგივე სიტყვების სიაში) გამოიყენეთ while ციკლი.

names = ["zaza", "saba", "nika", "Giorgi", "levani", "dato", "nika"]

i = 0
while i < len(names):
    
    if names[i] == names[i].lower():
        names[i] = names[i].upper()
        i += 1
    else:
  
        names.pop(i)

print(names)
