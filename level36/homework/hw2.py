# 2) შექმენი ფუქნცია რომელიც მიიღებს რაღაც ტექსტს და დაითვლის ამ ტექსტში ხმოვნების რაოდენობას

def num():
    text = input("შეიყვანე წინადადება:")
    vowels = "აეიოუaeiou"
    vowel = 0
    for i in range(len(text)):
        if text[i] in vowels:
            vowel += 1
    print(vowel)        
num()    