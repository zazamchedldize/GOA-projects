// 7)მოცემულია კოდი:

// let name = "Goga";

// function first() {
//     let age = 20;

//     function second() {
//         let city = "Tbilisi";

//         console.log(name);
//         console.log(age);
//         console.log(city);
//     }

//     second();
// }

// first();

// დავალება:

// მიუთითე თითოეული ცვლადის Scope.
// რომელი ცვლადის გამოყენება შეუძლია second() ფუნქციას?
// რომელი ცვლადის გამოყენება არ შეუძლია first() ფუნქციას?
// შეცვალე კოდი ისე, რომ city დაბეჭდო first() ფუნქციიდანაც.


let name = "Goga" // Global

function first() {

    let age = 20 // Local — first()

    function second() {

        let city = "Tbilisi" // Local — second()

        console.log(name)
        console.log(age)
        console.log(city)

    }

    second() // შეუძლია გამოიყენოს: name, age, city

}

first() // first()-ს შეუძლია name და age, მაგრამ არა city

// let name = "Goga" 

// function first() {

//     let age = 20 
//     function second() {

//         let city = "Tbilisi" 

//         console.log(name)
//         console.log(age)
//         console.log(city)

//     }

//     second() 
    //    console.log(city)
// }

// first() 