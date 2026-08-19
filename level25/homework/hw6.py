# 6) შექმენი ცარიელი list, მომხმარებელს 5-ჯერ შეაყვანინე რიცხვი, ყველა დაამატე list-ში და საბოლოოდ for loop-ის გამოყენებით დააჯამე რიცხვები რომელიც გექნება ლისტში

nums = []
sum = 0

for i in range(5):
    num = int(input("რიცხვი: "))
    nums.append(num)
    sum += num

print(sum)
