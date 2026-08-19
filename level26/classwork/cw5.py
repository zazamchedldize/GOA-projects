# შექმენით სია ["cat", "elephant", "dog", "tiger", "ox"], წაშალეთ ყველა სიტყვა რომლის სიგრძეც ნაკლებია 4-ზე

list = ["cat", "elephant", "dog", "tiger", "ox"]

for i in list:
    if len(i) <= 4:
        list.remove(i)
print(list)