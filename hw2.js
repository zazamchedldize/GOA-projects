// 2)შექმენი ფუნქცია organizeNumbers(numbers).

// მოცემულია:

// [10, 20, 30, 40, 50, 60, 70, 80]

// ფუნქციამ უნდა:

// slice()-ით გამოყოს პირველი 4 ელემენტი;
// slice()-ით გამოყოს ბოლო 4 ელემენტი;
// მეორე სიის დასაწყისში დაამატოს 100;
// პირველ სიას ბოლოში დაამატოს 5;
// concat()-ით გააერთიანოს ორივე;
// დააბრუნოს საბოლოო სია.


function organizeNumbers(numbers) {
    let list = [10, 20, 30, 40, 50, 60, 70, 80]
    
    let newNumbers1 = list.slice(0, 4)
    let newNumbers2 = list.slice(4, 8)
    newNumbers2.unshift(100)
    newNumbers1.push(5)
    let newNumbers3 = newNumbers1.concat(newNumbers2)
    return newNumbers3
}