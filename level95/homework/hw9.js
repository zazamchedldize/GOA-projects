// 9)let x = 10;

// function outer() {
//     let x = 20;

//     function middle() {
//         let y = 30;

//         function inner() {
//             let x = 40;

//             console.log(x);
//             console.log(y);
//         }

//         inner();
//     }

//     middle();
// }

// outer();

// დავალება:

// რა დაიბეჭდება?
// inner()-ში რომელი x გამოიყენება?
// თუ inner()-დან let x = 40 წავშლით, რომელი x იქნება გამოყენებული?
// თუ middle()-დანაც წავშლით let y = 30-ს, რა მოხდება console.log(y)-ზე?


// 1. დაიბეჭდება 40 და 30.

// 2. inner()-ში გამოიყენება x = 40, რადგან inner() პირველ რიგში საკუთარ Scope-ში ეძებს x-ს.

// 3. თუ inner()-დან let x = 40 წავშლით, გამოყენებული იქნება outer()-ის x = 20, რადგან inner()-ში x აღარ იქნება და გარეთა Scope-ში მოძებნის.

// 4. თუ middle()-დანაც წავშლით let y = 30-ს, console.log(y) გამოიტანს error-ს, რადგან y ვეღარ მოიძებნება არც inner(), არც middle(), არც outer() და არც Global Scope-ში.
