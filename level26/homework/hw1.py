# 1) შექმენი ცარიელი სია.მომხმარებელმა შეიყვანოს რიცხვები მანამ, სანამ არ დაწერს "stop".დაამატე მხოლოდ დადებითი რიცხვები სიაში, უარყოფითი რიცხვები არ დაამატო, ბოლოს დაბეჭდე სია

numbers = []

user_input = input("შეიყვანე რიცხვი ან დაწერე stop: ")

while user_input != "stop":
    num = int(user_input)

    if num > 0:
        numbers.append(num)

    user_input = input("შეიყვანე რიცხვი ან დაწერე stop: ")

print(numbers)
