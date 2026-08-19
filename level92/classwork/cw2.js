// 2)შექმენი ცვლადი სადაც შეინახავ რაიმე სტრინგს

// შენი დავალებაა ტერნარი ოპერატორის დახმარებით შეამოწმო --> თუ სახელის სიგრძე უდრის 6 ს დააკონსოლე --> medium length

// თუ სახელის სიგრძე მეტია 6 ზე დააკონსოლლოგე --> "long length"

// სხვა შემთხვევაშ დააკონსოლლოგე --> "short name"

let name = 'zaza'

name.length == 6 ? console.log("medium length") : name.length > 6 ? console.log("long length") : console.log("short name")