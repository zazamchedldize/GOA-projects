# შექმენი ცარიელი სია, for ციკლით 1 დაან 10-მდე დაამატე სიაში რიცხვები, remove-ის გამოყენებით წაშალე ყველა კენტი რიცხვი  და ბოლოს დაბეჭდე საბოლოო სია]~

nums = []

for i in range(1, 11):
    nums.append(i)

for i in range(1, 11):
    if i % 2 != 0:
        nums.remove(i)

print(nums)
