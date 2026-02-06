# 8) შექმენი ფუქნცია რომელიც მიიღებს რაღაც ტექსტს და ასევე რაღაც რიცხვს, ტექსტსში ყველა ასოა აქციე დიდად და რიცხვითი მნიშვნელობა გადააქცია სტრინგის ტიპად.

def convert(text, number):
    text = text.upper()
    number_str = str(number)
    print(text)
    print(number_str)
convert("hello world", 123)
