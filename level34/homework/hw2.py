def number():
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 4, 3, 6, 7, 4, 6, 3, 6, 12]
    
    biggest = numbers[0]
    
    for i in numbers:
        if i > biggest:
            biggest = i
    
    print(biggest)

number()
