// let player = {
//     _name: "Shadow",
//     _level: 15,
//     _experience: 850,
//     _health: 75,
//     _isOnline: true
// };


// მოთხოვნები:
// 1. შექმენი name getter, რომელიც დააბრუნებს მოთამაშის სახელს. თუ სახელი 3 სიმბოლოზე ნაკლებია, დააბრუნოს "Invalid name!".
// 2. შექმენი level getter, რომელიც შეამოწმებს მოთამაშის დონეს:
//    - თუ level მეტია ან ტოლია 10-ის, დააბრუნოს "Advanced Player".
//    - თუ level მეტია ან ტოლია 5-ის, დააბრუნოს "Intermediate Player".
//    - სხვა შემთხვევაში დააბრუნოს "Beginner Player".
// 3. შექმენი status getter, რომელიც შეამოწმებს მოთამაშის მდგომარეობას:
//    - თუ _health უდრის 0-ს, დააბრუნოს "Player is dead".
//    - თუ _health ნაკლებია 30-ზე, დააბრუნოს "Critical condition".
//    - სხვა შემთხვევაში დააბრუნოს "Player is healthy".



let player = {
    _name: "Shadow",
    _level: 15,
    _experience: 850,
    _health: 75,
    _isOnline: true,

    get name() {
        if (player._name.length < 3) {
            return "Invalid name!"
        } else {
            return player._name
        }
    },

    get level() {
        if (player._level >= 10) {
            return "Advanced Player"
        } else if (player._level >= 5) {
            return "Intermediate Player"
        } else {
            return "Beginner Player"
        }
    },

    get status() {
        if (player._health === 0) {
            return "Player is dead"
        } else if (player._health < 30) {
            return "Critical condition"
        } else {
            return "Player is healthy"
        }
    }
}

console.log(player.name)
console.log(player.level)
console.log(player.status)



