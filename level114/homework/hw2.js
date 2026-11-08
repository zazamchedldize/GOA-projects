// ==================მეორე დავალება==================

// 2)შექმენი ობიექტი player, რომელსაც ექნება შემდეი თვისებები:
// - _name—"Shadow"
// - _health—100
// - _energy—80
// - _level—1
// - _experience—0
// - _isAlive—true
// შექმენი შემდეგი getter-ები და setter-ები.
// 1. name
// - Getter-მა დააბრუნოს მოთამაშის სახელი.
// - Setter-მა სახელი შეცვალოს მხოლოდ მაშინ, თუ მნიშვნელობა სტრიქონია და სიგრძე მინიმუმ 3 სიმბოლოა.
// - სხვა შემთხვევაში გამოიტანოს "Name must contain at least 3 characters!"
// 2. health
// - Getter-მა დააბრუნოს ჯანმრთელობა.
// - Setter-მა მიიღოს ახალი ჯანმრთელობა მხოლოდ 0-დან 100-ის ჩათვლით.
// - თუ ჯანმრთელობა 0 გახდება, _isAlive ავტომაურად უნდა გახდეს false.
// - თუ ჯანმრთელობა 0-ზე მეია, _isAlive უნდა გახდეს true.
// - სხვა მნიშვნელობის შემთხვევაში გამოიტანოს "Invalid health!"
// 3. energy
// - Getter-მა დააბრუნოს ენერგია.
// - Setter-მა ენერგია შეცვალს მხოლოდ 0-დან 100-ის ჩათვით.
// - არასწორი მნიშვნელობის შემთხვევაში გამოიტანოს "Invalid energy!"
// 4. experience
// - Getter-მა დააბრუნოს მიმდინარე გამოცდილება.
// - Setter-მა მიიღოს მხოლოდ 0 ან მეტი რიცხვი.
// - როდესაც გამოცდილება 100-ს ან მეტს მიაღწევს, მოთამაშის დონე უნდა გაიზარდოს 1-ით და გამოცდილებას უნდა გამოაკლდეს 100.
// - თუ დარჩენილი გამოცილებაც 100-ს ან მეია, დონე კვლავ უნდა გაიზარდოს. მაგალითად, 250 გამოცდილების მიღებისას მოთამაშემ უნდა მოიმატოს 2 დონე და დარჩეს 50 გამოცდილება.
// 5. level — მხოლოდ Getter
// - დააბრუნოს მოთამაშის მიმდინარე დონე.
// - დონის პირდაპირ შეცვლა Getter-ის საშუალებით შეუძლებელი უნდა იყოს.
// 6. status — მხოლოდ Getter
// - თუ მოთამაშე ცოცხალია და ენერგია 0-ზე მეტია, დააბრუნოს "Ready".
// - თუ მოთამაშე ცოცხალია, მაგრამ ენრგია 0 აქვს, დააბრუნოს "Exhausted".
// - თუ ჯანმელობა 0 აქვს, დააბრუნოს "Dead".
// 7. attack — მხოლოდ Setter
// - Setter-მა მიიღოს შეტევის ენერგიის ღირებულება.
// - თუ მოთამაშე მკვდარია, შეტევა არ უნდა შესრულდეს.
// - თუ ენერგია მოთხოვნილ ღირებულებაზე ნაკლებია, გამოიტანოს "Not enough energy!"
// - წინააღმდეგ შემთვევაში ენერგია უნდა შემცირდეს შეტევის ღირებულებით და გამოიტანოს "Attack successful!"
// - შეტევა უნდა მიიღებოდეს მხოლოდ დადებთი რიცხვის შემთხვვაში.


let player = {
    _name: "Shadow",
    _health: 100,
    _energy: 80,
    _level: 1,
    _experience: 0,
    _isAlive: true,

    get name() {
        return this._name
    },

    set name(newName) {
        if(typeof newName === "string" && newName.length >= 3) {
            this._name = newName
        } else {
            console.log("Name must contain at least 3 characters!")
        }
    },

    get health() {
        return this._health
    },

    set health(newHealth) {
        if(typeof newHealth === "number" && newHealth >= 0 && newHealth <= 100) {
            this._health = newHealth

            if(this._health === 0) {
                this._isAlive = false
            } else {
                this._isAlive = true
            }
        } else {
            console.log("Invalid health!")
        }
    },

    get energy() {
        return this._energy
    },

    set energy(newEnergy) {
        if(typeof newEnergy === "number" && newEnergy >= 0 && newEnergy <= 100) {
            this._energy = newEnergy
        } else {
            console.log("Invalid energy!")
        }
    },

    get experience() {
        return this._experience
    },

    set experience(newExperience) {
        if(typeof newExperience === "number" && newExperience >= 0) {
            this._experience += newExperience

            while(this._experience >= 100) {
                this._level++
                this._experience -= 100
            }
        } else {
            console.log("Invalid experience!")
        }
    },

    get level() {
        return this._level
    },

    get status() {
        if(!this._isAlive) {
            return "Dead"
        } else if(this._energy === 0) {
            return "Exhausted"
        } else {
            return "Ready"
        }
    },

    set attack(energyCost) {
        if(!this._isAlive) {
            return
        } else if(typeof energyCost !== "number" || energyCost <= 0) {
            return
        } else if(this._energy < energyCost) {
            console.log("Not enough energy!")
        } else {
            this._energy -= energyCost
            console.log("Attack successful!")
        }
    }
}


console.log(player.name)
console.log(player.health)
console.log(player.energy)
console.log(player.level)
console.log(player.experience)
console.log(player.status)
player.experience = 250
console.log(player.level)
console.log(player.experience)
player.attack = 30
console.log(player.energy)
console.log(player.status)