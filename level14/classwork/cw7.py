user_password = input("Enter your password:")

i = 0


while user_password != "123" and i < 3:
    print("Password is incorrect")
    user_password = input("Enter your password:")

    i = i + 1

print("Passwored Matched")    