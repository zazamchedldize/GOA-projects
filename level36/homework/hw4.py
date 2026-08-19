# 4) შექმენი ფუნქცია რომელიც მიიღებს სიტყვების სიას და დააბრუნებს მხოლოდ იმ სიტყვებს რომლებიც იწყება დიდი ასოთი

def text(words):
    for i in words:
        if i[0] in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
            print(i)


text(["Hello", "gamaRjoba", "World"])
