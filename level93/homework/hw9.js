// 9)შექმენი ფუნქცია calculateSalary(salary, bonus = 0).

// ფუნქციამ უნდა:

// მიიღოს ხელფასი;
// თუ ბონუსი არ გადაეცა, ბონუსი იყოს 0;
// თუ ხელფასი 1000-ზე ნაკლებია, ბონუსი დაუმატოს ორმაგად;
// სხვა შემთხვევაში ჩვეულებრივ დაუმატოს;
// დააბრუნოს საბოლოო ხელფასი.

// მაგალითად:

// calculateSalary(800, 100)  // 1000
// calculateSalary(1500, 200) // 1700
// calculateSalary(900)       // 900

function calculateSalary(salary, bonus = 0) {
    if (salary < 1000) {
        return salary + bonus * 2
    } else {
        return salary + bonus
    }
}
console.log(calculateSalary(800, 100))
console.log(calculateSalary(1500, 200))
console.log(calculateSalary(900))