# 3) შექმენი ცარიელი სია. მომხმარებელს შემოაყვანინე რიცხვები, ყოველი რიცხვი დაამატე სიაში,როცა სიაში მყოფი რიცხვების ჯამი გახდება 100-ზე მეტი, შეწყვიტე რიცხვების შეყვანა, ბოლოს დაბეჭდე სია და მათი ჯამი

numbers = []
total = 0

user_input = input("შეიყვანე რიცხვი: ")

while total <= 100:
    num = int(user_input)
    numbers.append(num)
    total += num

    if total > 100:
        break

    user_input = input("შეიყვანე რიცხვი: ")

print(numbers)
print(total)
