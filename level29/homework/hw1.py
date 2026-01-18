# 1)შექმენი სია სადაც მოათავსებთ განსხვავებული ტიპის მონაცემებს,შენი დავალებაა რომ გაიგო თუ რამდენი ცალი სტრინგ ტიპის მონაცემი გვხვდება სიაში

list = [10, "hello", 3.14, True, "world", 42, "Python", False]

string = 0
for i in range(len(list)):
    if type(list[i]) == str:
        string+= 1

print("სიის სტრინგების რაოდენობა:", string)
