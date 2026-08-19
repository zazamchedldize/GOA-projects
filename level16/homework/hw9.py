#9)შექმენით კალკულატორი როგორიც ჩვენ გავაკეთეთ,დაუმატეთ სხვა მათემატიკური ოპერატორები,ასევე დაუმატეთ შედარების ოპერატორებიც

number1 = int(input("Enter a number: "))
number2 = int(input("Enter a number: "))
operator = input("Enter an operator (+, -, *, /, >, <, =): ")

if operator == "+":
    print(number1 + number2)
elif operator == "-":
    print(number1 - number2)
elif operator == "*":
    print(number1 * number2)
elif operator == ">":
    print(number1 > number2)
elif operator == "<":
    print(number1 < number2)   
elif operator == "=":
    print(number1 == number2)  
elif operator == "/":
    if number2 != 0:
        print(number1 / number2)
    else:
        print("Error: Division by zero is not allowed.")    