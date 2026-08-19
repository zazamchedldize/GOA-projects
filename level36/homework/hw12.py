# 12) დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.

def sumDigits(number):
    total = 0
    for i in str(number):
        total += int(i)
    print(total)

sumDigits(23423)
