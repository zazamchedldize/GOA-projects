// 7)შექმენი ფუნქცია findDivisors, რომელსაც გადაეცემა ერთი რიცხვი.

// ციკლის გამოყენებით იპოვე და დაბეჭდე ამ რიცხვის ყველა გამყოფი.

// მაგალითად, თუ გადაეცემა 12, უნდა დაიბეჭდოს 1, 2, 3, 4, 6 და 12.


function findDivisors(number) {
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i)
        }
    }
}

findDivisors(12)