# 5) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში და გამოითვალე ამ რიცხვების საშუალო არითმეტიკული.

numbers = []

user_input = input("შეიყვანე რიცხვი ან დაწერე stop: ")

while user_input != "stop":
    num = int(user_input)
    numbers.append(num)
    user_input = input("შეიყვანე რიცხვი ან დაწერე stop: ")

average = sum(numbers) / len(numbers)

print(numbers)
print(average)
