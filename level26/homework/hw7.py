# 7) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში, თუ ორი მეზობელი ელემენტის ჯამი <50-ზე მაშინ წაშალე მეორე ელემენტი, დაბეჭდე საბოლოო სია.

numbers = []

user_input = input("შეიყვანე რიცხვი ან დაწერე stop: ")

while user_input != "stop":
    numbers.append(int(user_input))
    user_input = input("შეიყვანე რიცხვი ან დაწერე stop: ")

index = 0
while index < len(numbers) - 1:
    if numbers[index] + numbers[index + 1] < 50:
        numbers.pop(index + 1)
    else:
        index += 1

print(numbers)
