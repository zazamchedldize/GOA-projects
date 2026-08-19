# 6) მომხმარებელს შემოაყვანინე რიცხვები, შექმენი ორი სია დადებითი და უარყოფითი სიებისთვის, დადებითი რიცხვები დაამატე დადებითი რიცხვებისთვის განკუთვნილ სიაში, უარყოფითი რიცხვები კი პირიქით

positive = []
negative = []

user_input = input("შეიყვანე რიცხვი ან დაწერე stop: ")

while user_input != "stop":
    num = int(user_input)

    if num > 0:
        positive.append(num)
    elif num < 0:
        negative.append(num)

    user_input = input("შეიყვანე რიცხვი ან დაწერე stop: ")

print(positive)
print(negative)
