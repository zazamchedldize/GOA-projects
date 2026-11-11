// 1)შექმენით factory ფუნქცია რომელიც დააბრუნებს ობიექტს შემდეგი property ებით --> name , surname , age , adress , hobby

// გადაეცით ამავე რაოდენობის პარამეტრი ფუქნციას რომ გადასცეთ ქიებს მნიშვნელობებად , ამ ობიექტს დაამატეთ ასევე მეთოდი სახელად displayUsersName() რომელიც დააბრუნებს მომხმარრებლის სახელს გვარს და მისამართს

// შექმენი ასეთი 4 ობიექტი სხვადასხვა მნიშვენლობებით და 4 ივე მათგანზე გამოიძახეთ displayUsersName() მეთოდი , ასევე თითოეული ობიექტი შეინახეთ ცვლადებში და თვითონ ეს ცვლადებიც(ობიექტები) ც გამოიტანეთ კონსოლში

function createNew(name,surname,age,adress,hobby) {
    return {
        name: name,
        surname: surname,
        age: age,
        adress: adress,
        hobby: hobby,
        displayUserName() {
            return `${this.name} ${this.surname}, ${this.adress}`
        }
    }
}

let user1 = createNew("Goga", "Beridze", 16, "Kutaisi", "Programming")
let user2 = createNew("Nika", "Kapanadze", 17, "Tbilisi", "Football")
let user3 = createNew("Luka", "Maisuradze", 15, "Batumi", "Gaming")
let user4 = createNew("Giorgi", "Kobakhidze", 18, "Rustavi", "Music")

console.log(user1.displayUserName())
console.log(user2.displayUserName())
console.log(user3.displayUserName())
console.log(user4.displayUserName())

console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)