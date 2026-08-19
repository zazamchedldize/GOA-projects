// 6)let city = "TBILISI";

// ჯერ გამოიყენე .toLowerCase() და შემდეგ:

// თუ "tbilisi" არის → "თბილისი"
// თუ "batumi" არის → "ბათუმი"
// თუ "kutaisi" არის → "ქუთაისი"
// სხვა შემთხვევაში → "უცნობი ქალაქი"

let city = "TBILISI"
city = city.toLowerCase()

if (city == "tbilisi") {
    console.log("თბილისი")
} else if (city == "batumi") {
    console.log("ბათუმი")
} else if (city == "kutaisi") {
    console.log("ქუთაისი")
} else {
    console.log("უცნობი ქალაქი")
}