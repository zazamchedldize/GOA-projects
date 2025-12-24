# 2) შექმენი list: fruits = ["apple", "banana", "apple", "orange"] მომხმარებელს შეაყვანინე ხილი, თუ list-ში უკვე არის ეს ხილი remove()-ით წაშალე მხოლოდ პირველი შემხვედრი, თუ არ არის ლისტში მაშინ დაბეჭდე შესაბამისი შეტყობინება

fruits = ["apple", "banana", "apple", "orange"]
name = input("შეიყვანე ხილი: ")
if name in fruits:
    fruits.remove(name)
    print("ხილი წაშლილია.")
else:
    print("ხილი არ არის სიაში.")