// 1)შექმენით ცვლადი სადაც შეინახავთ რაიმე ქალაქის სახელს

// ქეისებით განიხილე შემდეგი სამი ქეისი და დააკონსოლლოგე შესაბამისი ტექსტი --> "tbilisi'  , "qutaisi" , "batumi"

// დაამატე ელსის ვარიანტიც


let city = "kutaisi"

switch (city) {
    case 'kutaisi':
        console.log("Kutaisi")
        break
    case 'tbilisi':
        console.log("tbilisi")
        break
    case 'batumi':
        console.log("batumi")
        break
    default:
        console.log("other city")
}