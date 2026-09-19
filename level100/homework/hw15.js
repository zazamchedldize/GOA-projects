// 15)let numbers = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5];

// გაიარე მასივი loop-ით.

// თუ რიცხვი კენტია → გამოტოვე continue-ით.
// თუ რიცხვი 50-ზე მეტია → საერთოდ შეწყვიტე loop break-ით.
// დანარჩენი ლუწი რიცხვები გამოიტანე.
// ბოლოს გამოიტანე მათი ჯამი.

let numbers = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5]
let sum = 0

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        continue
    }
    if(numbers[i] > 50) {
        break
    }
    console.log(numbers[i])
    sum += numbers[i]
}
console.log(sum)