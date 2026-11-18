// 4)let students = [
//     ["Goga", 19, [90, 85, 95]],
//     ["Nika", 20, [75, 88, 80]],
//     ["Saba", 18, [100, 95, 90]]
// ];


// 1. Destructuring-ის გამოყენებით დაშალე სამივე სტუდენტის ინფორმაცია.
// 2. თითოეული სტუდენტისთვის ცალკე შეინახე სახელი და ასაკი.
// 3. თითოეული სტუდენტის ქულების მასივიდან ცალკე შეინახე პირველი და მესამე ქულა.
// 4. გამოთვალე გოგას სამი ქულის ჯამი.
// 5. შეამოწმე, აქვს თუ არა რომელიმე სტუდენტს 100 ქულა.


let students = [
    ["Goga", 19, [90, 85, 95]],
    ["Nika", 20, [75, 88, 80]],
    ["Saba", 18, [100, 95, 90]]
]

let [[gogaName, gogaAge, [gogaFirst, , gogaThird]], [nikaName, nikaAge, [nikaFirst, , nikaThird]], [sabaName, sabaAge, [sabaFirst, , sabaThird]]] = students

console.log(gogaName, gogaAge, gogaFirst, gogaThird)
console.log(nikaName, nikaAge, nikaFirst, nikaThird)
console.log(sabaName, sabaAge, sabaFirst, sabaThird)

let gogaTotal = gogaFirst + 85 + gogaThird

console.log(gogaTotal)

if (gogaFirst == 100 || nikaFirst == 100 || sabaFirst == 100) {
    console.log("A student has 100 points")
}