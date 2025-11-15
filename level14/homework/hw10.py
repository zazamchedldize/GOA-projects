#მომხმარებელს შემოატანინეთ რიცხვი, ამ რიცხვის ჩათვლით შეკრიბეთ ყველა რიცხვი და გამოიტანეთ საბოლოო პასუხი

number = int(input("Enter number: "))

Total = 0   

for i in range(1, number + 1):
    Total = Total + i

print("Total is:", Total)



number2 = int(input("Enter number: "))

Total = 0
i = 1

while i <= number2:
    Total = Total + i
    i = i + 1

print("Total is:", Total)
