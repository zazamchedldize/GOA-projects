// 5)ელემენტის ჩანაცვლება მისი პოზიციის მიხედვით
// let students = [
//     "Giorgi",
//     "Nika",
//     "Saba",
//     "Luka",
//     "Dato",
//     "Ana"
// ];

// მოცემულია:

// let position = 4;
// let newName = "Goga";

// position აღნიშნავს ადამიანურ პოზიციას — ანუ 1 ნიშნავს პირველ ელემენტს.

// დავალება:

// position-ის მიხედვით იპოვე შესაბამისი ელემენტი;
// ჩაანაცვლე newName-ით;
// თუ ასეთი პოზიცია არ არსებობს, გამოიტანე "Invalid position".

let students = ["Giorgi", "Nika", "Saba", "Luka", "Dato", "Ana"]

let position = 4

let newName = "Goga"

if (position >= 1 && position <= students.length) {
    students[position - 1] = newName
} else {
    console.log("Invalid position")
}

console.log(students)