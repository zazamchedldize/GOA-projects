// 3)let groupA = ["Nika", "Gio"];
// let groupB = ["Ana", "Mariam"];
// let groupC = ["Luka", "Saba"];


// 1. შექმენი ახალი მასივი allStudents, რომელშიც სამივე ჯგუფის მოსწავლე იქნება.
// 2. ახალი მასივის დასაწყისში დაამატე "Goga".
// 3. ბოლოში დაამატე "Data" და "Tornike".
// 4. შექმენი კიდევ ერთი მასივი bestStudents, რომელშიც იქნება allStudents-ის პირველი სამი და ბოლო ორი ელემენტი.


let groupA = ["Nika", "Gio"]
let groupB = ["Ana", "Mariam"]
let groupC = ["Luka", "Saba"]

let allStudents = [...groupA, ...groupB, ...groupC]

allStudents.unshift("Goga")
allStudents.push("Data", "Tornike")

let bestStudents = [...allStudents.slice(0, 3), ...allStudents.slice(-2)]