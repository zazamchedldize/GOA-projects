# 1) შექმენი list: names = ["nika", "luka", "giorgi"] მომხმარებელს შეაყვანინე: ინდექსი და სახელი, insert()-ის გამოყენებით ჩასვი სახელი მითითებულ ადგილას და დაბეჭდე შედეგი

names = ["nika", "luka", "giorgi"]
index = int(input("შეიყვანე ინდექსი (0-2): "))
name = input("შეიყვანე სახელი: ")
names.insert(index, name)
print("განახლებული list:", names)