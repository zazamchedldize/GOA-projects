// 9)let scores = [45, 60, 72, 38, 90];
// პირველი ეტაპი — .map()

// თუ ქულა 50-ზე ნაკლებია, დაუმატე 15.

// თუ 50 ან მეტია, დაუტოვე უცვლელი.

// მეორე ეტაპი — .forEach()

// დაბეჭდე:

// Score: 60
// Score: 60
// Score: 72
// Score: 53
// Score: 90

let scores = [45, 60, 72, 38, 90]

let newScores = scores.map((item) => {
    if(item < 50) {
        return item + 15
    } else {
        return item
    }
})

newScores.forEach((item) => {
    console.log("Score: " + item)
})