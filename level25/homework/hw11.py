# 11) შექმენი ცარიელი list მომხმარებელს შემოაყვანინე რიცხვები მანამ სანამ არ დაწერს "stop", ყველა რიცხვი დაამატე ლისთში append()ის გამოყენებით და საბოლოოდ დაბეჭდე ლისთი

nums = []

while True:
    num = input("შეიყვანე რიცხვი ან დაწერე stop: ")

    if num == "stop":
        break

    nums.append(int(num))

print(nums)
