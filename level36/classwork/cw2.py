# 2) შექმენი ფუქნცია სახელად numbers რომელიც მიიღებს პარამეტრად რაღაც რიცხვს და დაპრინტავს ეს რიცხვი კენტია თუ ლუწი

def numbers(num):
    if num % 2 == 0:
        print(str(num) + " არის ლუწი")
    else:
        print(str(num) + " არის კენტი")

numbers(5)
numbers(10)
