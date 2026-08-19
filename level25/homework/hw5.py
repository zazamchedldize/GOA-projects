# 5) შექმენი ნებისმიერი list 5 ელემენტით, მომხმარებელს ჰკითხე: გინდა list-ის გასუფთავება? (yes/no), თუ პასუხი "yes"  გამოიყენე clear(), ბოლოს დაბეჭდე list

list = [1,2,3,"zaza",5]
answer=input("გინდა list-ის გასუფთავება? (yes/no): ")
if answer=="yes":
    list.clear()
print(list)