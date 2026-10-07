// 3)მოცემულია:

// let scores = [45, 78, 32, 90, 56, 84, 67];

// გამოიყენე .map() და შექმენი ახალი სია newScores.

// წესები:

// თუ ქულა 60-ზე ნაკლებია, მას დაემატოს 10.
// თუ ქულა 60 ან მეტია, მას დაემატოს 5.
// ძველი scores სია არ უნდა შეიცვალოს.
// გამოიყენე ერთი .map().


let scores = [45, 78, 32, 90, 56, 84, 67]


let newScores = scores.map((item) => {
    if(item < 60) {
        return item + 10
    } else{
        return item + 5
    } 
})

console.log(newScores)