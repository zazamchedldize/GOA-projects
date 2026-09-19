// 18)let correctPin = 4821;
// let attempts = [1234, 1111, 4821, 5555];

// გადაამოწმე მცდელობები თანმიმდევრობით.

// თუ PIN სწორია → "Access granted" და break.
// არასწორი PIN-ის შემთხვევაში დაითვალე მცდელობა.
// თუ 3 არასწორი მცდელობა დაგროვდა → "Card blocked" და break.
// თუ სწორი PIN საერთოდ ვერ მოიძებნა → "Access denied".



let correctPin = 4821
let attempts = [1234, 1111, 4821, 5555]
let fail = 0
let warning = 3
let found = false

for(let i = 0; i < attempts.length; i++) {
    if(attempts[i] === correctPin) {
        console.log("Access granted")
        found = true
        break
    }
    if(attempts[i] !== correctPin) {
        fail++
    }
    if(fail === warning) {
        console.log("Card blocked")
        break
    }
}
if(found === false && fail < warning) {
    console.log("Access denied")
}