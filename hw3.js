// 3)შექმენი ფუნქცია studentManager(students).

// ["Giorgi", "Nika", "Ana", "Luka", "Saba"]

// ფუნქციამ უნდა:

// ამოიღოს პირველი სტუდენტი;
// დაამატოს "Mariam" დასაწყისში;
// დაამატოს "Dato" ბოლოში;
// "Luka" ჩაანაცვლოს "Gabrieli"-ით splice()-ის გამოყენებით;
// საბოლოო სიიდან slice()-ით შექმნას ახალი სია, რომელიც შეიცავს მხოლოდ პირველ 4 სტუდენტს;
// დააბრუნოს ახალი სია.


function studentManager(students) {
    let list = ["Giorgi", "Nika", "Ana", "Luka", "Saba"]
    list.shift()
    list.unshift("Mariam")
    list.push("Dato")
    list.splice(3,1,"Gabrieli")
    let newList = list.slice(0,4)
    return newList
}