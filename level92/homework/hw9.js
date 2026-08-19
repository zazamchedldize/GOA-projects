// 9)ეს დავლაება როგორ შეიძლება გამარტივდეს switch ებით შეგიძლიათ მოიძიოთ და დაწეროთ/მაგრამ გაიაზრეთ და შემდეგზე ჩავიბარებ აუცილებლად

// let month= 8;

// switch-ის გამოყენებით განსაზღვრე სეზონი:

// 12, 1, 2 → "Winter"
// 3, 4, 5 → "Spring"
// 6, 7, 8 → "Summer"
// 9, 10, 11 → "Autumn"


let month = 8

switch (month) {
    case 1:
    case 12:
    case 2:
        console.log("Winter")
        break
    case 3:
    case 4:
    case 5:
        console.log("Spring")
        break      
    case 6:
    case 7:
    case 8:
        console.log("Summer")
        break
    case 9:
    case 10:
    case 11:
        console.log("Autumn")
        break 
    default:
        console.log("Invalid Month")
        break                    
}