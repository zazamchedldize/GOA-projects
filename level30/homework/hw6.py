# 6) შექმენით სტრინგებით სავსე სია, წაშალეთ ის სტრინგ მონაცემთა ტიპის ელემენტები რომლებიც არიან 5-ზე მეტი სიგრძეში ან დგანან კენტ ინდექსზე. გამოიყენეთ remove() ფუნქცია.

strings = ["zaza", "giorgi", "saba", "luka","levani","nika"]

i = 0
while i < len(strings):
    if len(strings[i]) > 5 or i % 2 != 0:
        strings.remove(strings[i])
    else:
        i += 1

print(strings)
