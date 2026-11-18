// 8)let employee = {
//     firstName: "Nika",
//     lastName: "Beridze",
//     position: "Developer",
//     salary: 3500,
//     experience: 4
// };


// 1. დაშალე ობიექტი Destructuring-ის გამოყენებით.
// 2. firstName შეინახე name ცვლადში.
// 3. lastName შეინახე surname ცვლადში.
// 4. position შეინახე jobTitle ცვლადში.
// 5. გამოიტანე თანამშრომლის სრული სახელი და თანამდებობა.
// 6. შეამოწმე, აქვს თუ არა თანამშრომელს 3 წელზე მეტი გამოცდილება.


let employee = {
    firstName: "Nika",
    lastName: "Beridze",
    position: "Developer",
    salary: 3500,
    experience: 4
}

let {firstName: name, lastName: surname, position: jobTitle, salary, experience} = employee

console.log(`${name} ${surname}`)
console.log(jobTitle)

if (experience > 3) {
    console.log("Experienced employee")
} else {
    console.log("Not enough experience")
}