# 4) შექმენი list: colors = ["red", "blue", "green", "yellow"] მომხმარებელს შეაყვანინე ფერი, თუ არსებობს  დაბეჭდე მისი index(), თუ არა  დაბეჭდე "Not found"

colors = ["red", "blue", "green", "yellow"]
color=input("შეიყვანე ფერი: ")
if color in colors:
    print("ფერის ინდექსი არის:", colors.index(color))
else:
    print("Not found") 