# 2)შექმენი სია სადაც იქნება ადამიანის სახელები პატარა ასოებით დაწერილი,შემდეგ შექმენი ცარიელი სია და ამ ახალ სიაში ჩაამატე ძველი სიიდან იგივე სახელები ოპღონდ დიდი ასოები ქონდეთ დიდი

list = ["zaza", "nika", "giorgi", "saba"]

empty_list = []

for i in range(len(list)):
    empty_list.append(list[i].upper())

print(empty_list)
