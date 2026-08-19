# 1) შექმენით სახელებით სავსე სია, თუ სიტყვის ყველა ასო არის პატარა და პირველი ასო არის d, მაშინ ახალ სიაში ჩაამატეთ სახელი "NIKA", თუ სიტყვის ყველა ასო არის დიდი ან იწყება ასო K-თი, მაშინ სიაში ჩაამატეთ სახელი "GOGA", სხვა შემთხვევაში სიაში ჩაამატეთ სიტყვა "ლიდერი". დაპრინტეთ მიღებული სია.

names = ["zaza", "saba", "nika", "giorgi", "levani", "dato", "nika"]

new_list = []

for i in range(len(names)):
   
    if names[i] == names[i].lower() and names[i][0] == "d":
        new_list.append("NIKA")

    elif names[i] == names[i].upper() or names[i][0] == "K":
        new_list.append("GOGA")

    else:
        new_list.append("ლიდერი")
        
print(new_list)        