# 3) შექმენი ფუქნცია რომელიც მიიღებს რიცხვების სიას [3, 7, 1, 9] და დააბრუნებს ყველაზე დიდ რიცხვს

def biggest(numbers):
    biggest_num = numbers[0]
    
    for i in numbers:
        if i > biggest_num:
            biggest_num = i
            
    return biggest_num

nums = [3, 7, 1, 9]
print(biggest(nums))
