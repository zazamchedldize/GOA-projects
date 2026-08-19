# 4) შექმენი ცარიელი სია. მომხმარებელს შემოაყვანინე რიცხვები, თუ რიცხვი უკვე არსებობს სიაში შეწყვიტე შეყვანა, სხვა შემთხვევაში დაამატე რიცხვები სიაში, ბოლოს დაბეჭდე მთლიანი სია

numbers = []

user_input = input("შეიყვანე რიცხვი: ")

while True:
    num = int(user_input)

    if num in numbers:
        break

    numbers.append(num)
    user_input = input("შეიყვანე რიცხვი: ")

print(numbers)
