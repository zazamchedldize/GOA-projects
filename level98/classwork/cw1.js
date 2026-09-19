// 1)const school = [
//     ["Math", ["Giorgi", "Nika", "Saba"]],
//     ["English", ["Ana", "Mariam", "Luka"]],
//     ["Programming", [
//         ["JavaScript", ["Dato", "Giga", "Tato"]],
//         ["Python", ["Sandro", "Nino", "Gio"]]
//     ]]
// ];

// დავალება:

// გამოიტანე "Giga" კონსოლში.
// გამოიტანე "Nino" კონსოლში.
// გამოიტანე "Programming" კურსის მეორე სტუდენტი JavaScript-ის ჯგუფიდან.
// გამოიტანე Python-ის ჯგუფის პირველი სტუდენტი.
// გამოიტანე "Mariam" ისე, რომ პირდაპირ "Mariam" არ დაწერო კოდში — უნდა მიაღწიო მას მასივის ინდექსების გამოყენებით.

// დამატებითი რთული ნაწილი:

// მოცემული მასივიდან გამოიტანე:

// ["Dato", "Giga", "Tato"]

// და შემდეგ ამავე მასივიდან მხოლოდ "Tato" გამოიტანე.


const school = [
    ["Math", ["Giorgi", "Nika", "Saba"]],
    ["English", ["Ana", "Mariam", "Luka"]],
    ["Programming", [
        ["JavaScript", ["Dato", "Giga", "Tato"]],
        ["Python", ["Sandro", "Nino", "Gio"]]
    ]]
]

console.log(school[2][1][0][1][1])
console.log(school[2][1][1][1][1])
console.log(school[2][1][0][1][1])
console.log(school[2][1][1][1][0])
console.log(school[1][1][1])
console.log(school[2][1][0][1])
console.log(school[2][1][0][1][2])