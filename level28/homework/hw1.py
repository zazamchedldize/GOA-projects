# 1) მომხმარებელს შემოაყვანინე წინადადება. დაბეჭდე თითოეული სიტყვა ცალ–ცალკე for loop-ის გამოყენებით. თითოეული სიტყვა დაბეჭდე capitalize()-ით.

sentence = input("Enter sentence:")

for word in sentence:
    print(word.capitalize())