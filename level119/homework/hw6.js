// 6)let student = {
//     name: "Nika",
//     age: 20,
//     city: "Tbilisi"
// };


// 1. Spread Operator-ის გამოყენებით შექმენი studentCopy.
// 2. ასლში სახელი შეცვალე "Giorgi"-თ.
// 3. ასაკი შეცვალე 22-ით.
// 4. დაამატე ახალი property grade: "A".
// 5. დაბეჭდე ორივე ობიექტი.

let student = {
    name: "Nika",
    age: 20,
    city: "Tbilisi"
}

let studentCopy = {...student}

studentCopy.name = "Giorgi"
studentCopy.age = 22
studentCopy.grade = "A"

console.log(student)
console.log(studentCopy)