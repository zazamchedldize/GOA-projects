# 5) შექმენი ფუქნცია რომელიც იღებს რიცხვების სიას და აბრუნებს მათ საშუალოს

def average(nums):
    total = 0
    for n in nums:
        total = total + n
    print(total / len(nums))

numbers = [10, 20, 30, 40]
average(numbers)
