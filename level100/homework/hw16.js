// 16)let balance = 1200;
// let operations = [200, -150, -500, 300, -200, -1000, 400];

// დადებითი რიცხვი ნიშნავს შეტანას, უარყოფითი — გატანას.

// Loop-ის საშუალებით:

// თითოეული ოპერაცია დაამუშავე;
// თანხის შეტანისას გაზარდე balance;
// თანხის გატანისას შეამოწმე საკმარისი თანხაა თუ არა;
// თუ თანხა საკმარისი არ არის, ოპერაცია არ შეასრულო;
// დაითვალე რამდენი გატანა შესრულდა;
// დაითვალე რამდენი ოპერაცია ვერ შესრულდა;
// ბოლოს გამოიტანე საბოლოო ბალანსი.


let balance = 1200
let operations = [200, -150, -500, 300, -200, -1000, 400]
let withdraw = 0
let fails = 0

for(let i = 0; i < operations.length; i++) {
    if(operations[i] > 0) {
        balance += operations[i]
    }
    if(operations[i] < 0) {
        if(balance < -operations[i]) {
            fails++
            continue
        } else {
            balance += operations[i]
            withdraw++
        }
    }
}

console.log(withdraw)
console.log(fails)
console.log(balance)