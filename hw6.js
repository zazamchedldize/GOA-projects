// 6)მოცემულია:
// let students = [
//     ["Giorgi", 18],
//     ["Nika", 20],
//     ["Luka", 17],
//     ["Saba", 19]
// ];
// შექმენი ფუნქცია getStudent(students), რომელმაც უნდა:

// გამოიტანოს პირველი სტუდენტის სახელი;
// გამოიტანოს მეორე სტუდენტის ასაკი;
// შეცვალოს მესამე სტუდენტის ასაკი 18-ზე;
// დააბრუნოს განახლებული სია.

let students = [["Giorgi", 18],["Nika", 20],["Luka", 17],["Saba", 19]]

function getStudent(students) {
    console.log(students[0][0])
    console.log(students[1][1])
    students[2][1] = 18
    return students
}