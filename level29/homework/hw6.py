# 6)მომხმარებელს შემოატანინე რაიმე სტრინგი,შენი დავალებაა დაითვალო თუ რამდენი ცალი ხმოვანი და რამდენი ცალი თანხმოვანი გვხვდება მის მიერ შემოყვანილ სტრინგში

string = input("Enter Word: ").lower()  # მცირე ასოებში გადაყვანა

vowels = "aeiou"
consonants = "bcdfghjklmnpqrstvwxyz"

vowel = 0
consonant = 0

for i in range(len(string)):
    if string[i] in vowels:
        vowel += 1
    elif string[i] in consonants:
        consonant += 1

print("ხმოვანების რაოდენობა:", vowel)
print("თანხმოვნების რაოდენობა:", consonant)
