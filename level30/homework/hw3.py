# 3) შექმენით ქვეყნების სია, წაშალეთ pop() ან remove() ფუნქციით ყველა ის სიტყვა რომლის ყველა ასო არის დიდი, ხოლო ყველა სხვა სიტყვას ყველა ასო გაუხადეთ დიდი. დაპრინტეთ საბოლოო შედეგი. გამოიყენეთ while ციკლი.

countries = ["Georgia", "america", "thailand", "germany"]

i = 0
while i < len(countries):
  
    if countries[i] == countries[i].upper():
        countries.pop(i)
    else:
      
        countries[i] = countries[i].upper()
        i += 1

print(countries)
