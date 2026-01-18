# 4)შექმენი სია და შეიყვანე სტრიგნები პატარა ასოებით,შენი დავალებაა შეამოწმო,თუ სტრინგი შეიცავს 5 ასოზე მეტს მაშინ ასეთი სიტყვები ჩაამატე ახალ სიაში ოღონდ პირველი ასო ქონდეთ დიდი ,ხოლო თუ სიტყვა შეიცავს 5 ასოზე ნაკლებს მაშინ დაამატე ეს ელემენტებიც სიაში ოღონდ ყველა ასო ქონდეთ დიდი

list = ["zaza", "hello", "nika", "world", "banani", "vashli"]

new_list = []

for i in range(len(list)):
    if len(list[i]) > 5:
        new_list.append(list[i].capitalize())
    else:
        new_list.append(list[i].upper())

print(new_list)
