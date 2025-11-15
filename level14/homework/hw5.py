#მომხმარებელს შემოატანინეთ რიცხვი სანამ თქვენს მიერ ჩაფიქრებულ რიცხვს არ შემოიტანს.

password = "1234" 

user_input = input("Enter password: ")

while user_input != password:
    user_input = input("Incorrect, Try again: ")

print("Password correct")
