// 2)შექმენით arrow ფუნქცია რომელსაც გადაეცემა ერთ პარამეტრი name ფუნქციამ უნდა შეამოწმოს if else ით იწყება თუ არა ეს სახელი "გ" ასოზე , თუ იწყება დააბრუნე good name სხვა შემთხვევაში დააბრუნე "still good name"

let checkName = name => {
    if(name.startsWith("გ")) {
        return "Good Name"
    } else {
        return "Still Good Name"
    }
}

console.log(checkName("ზაზა"))
console.log(checkName("გიორგი"))