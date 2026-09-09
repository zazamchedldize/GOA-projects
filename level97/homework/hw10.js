// 10)let numbers = [10, 20, 30, 40, 50];

// ჯერ splice()-ით შეცვალე მასივი ისე, რომ 30 შეიცვალოს 100-ით.

// შემდეგ თავიდან შექმენი იგივე საწყისი მასივი და toSpliced()-ით გააკეთე იგივე ცვლილება.

// დაბეჭდე ორივე შედეგი და შეამოწმე, რა განსხვავებაა splice()-სა და toSpliced()-ს შორი

let numbers = [10, 20, 30, 40, 50]
numbers.splice(2, 1, 100)
console.log(numbers)
numbers = [10, 20, 30, 40, 50]
let newNumbers = numbers.toSpliced(2, 1, 100)

console.log(numbers)
console.log(newNumbers)

// splice() ცვლის ორიგინალ მასივს, ხოლო toSpliced() არ ცვლის ორიგინალ მასივს და ქმნის ახალ მასივს შეცვლილი ელემენტებით.