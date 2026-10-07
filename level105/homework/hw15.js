// 15)let numbers = [5, 12, 30, 7, 21, 40, 9, 18];

// გამოიყენე მხოლოდ .map() და .forEach().

// პირველი ეტაპი — .map()

// თითოეული რიცხვისთვის:

// თუ რიცხვი 10-ზე ნაკლებია → დაუმატე 10
// თუ რიცხვი 10-დან 20-მდეა → გაამრავლე 2-ზე
// თუ რიცხვი 20-ზე მეტია → გამოაკელი 5
// თუ მიღებული შედეგი ლუწია → კიდევ დაუმატე 2
// თუ მიღებული შედეგი კენტია → კიდევ დაუმატე 1
// მეორე ეტაპი — .forEach()

// დაბეჭდე:

// Original number: 5
// Final result: 16

// მაგრამ აქ ერთი მნიშვნელოვანი პირობაა:

// ორიგინალი რიცხვი უნდა შეინარჩუნო და შედეგი ცალკე მიიღო.

// ანუ .map()-ის შიგნით უნდა იფიქრო ისე, რომ საბოლოოდ .forEach()-ს ორივე ინფორმაცია ჰქონდეს.

let numbers = [5, 12, 30, 7, 21, 40, 9, 18]

let results = numbers.map((item) => {
    let result

    if(item < 10) {
        result = item + 10
    } else if(item <= 20) {
        result = item * 2
    } else {
        result = item - 5
    }

    if(result % 2 === 0) {
        result += 2
    } else {
        result += 1
    }

    return result
})

results.forEach((item, index) => {
    console.log("Original number: " + numbers[index])
    console.log("Final result: " + item)
})