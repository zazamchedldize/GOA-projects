# 8) მომხმარებელს შეაყვანინე 5 რიცხვი while loopით, დაითვალე მათი საშუალო, თუ საშუალო > 50 დაბეჭდე "დიდი საშუალო" წინააღმდეგ შემთხვევაში "პატარა საშუალო"

total = 0
count = 0

while count < 5:
    number = int(input("Enter a number: "))
    total += number
    count += 1

average = total / 5

print("საშუალო:", average)

if average > 50:
    print("დიდი საშუალო")
else:
    print("პატარა საშუალო")
