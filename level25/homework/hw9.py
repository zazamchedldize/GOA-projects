# 9) შექმენი list: nums = [1, 2, 3, 4] მომხმარებელს შეაყვანინე: ინდექსი და რიცხვი, თუ ინდექსი list-ის საზღვრებშია გამოიყენე insert() ჩასამატებლად, თუ ინდექსი ლისტზე დიდია მაშინ გამოიყენე append()

nums = [1, 2, 3, 4]

index = int(input("შეიყვანე ინდექსი: "))
num = int(input("შეიყვანე რიცხვი: "))

if index <= 3:
    nums.insert(index, num)
else:
    nums.append(num)

print(nums)
