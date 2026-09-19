// 2)შექმენი სია სადაც მოათავსებ რიცხვებს , შენი დავალებაა რომ გადაუარო for ით ამ სიას და გააჩერო ლუპი მაშინ როდესაც შეხვდები 50 ზე მაღალ რიცხვს,გამოიტანე მანამ ყველა რიცხვი სანამ ასეთ რიცხვს იპოვი , თუ ასეთ რიცხვს იპოვი break ამდე დააკონსოლე რომ num which is greater than 50 is found + NUM 

let nums = [2, 3, 5, 6, 4, 67, 7, 4, 5, 4, 3, 23, 2]

for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 50) {
        console.log("num which is greater than 50 is found " + nums[i])
        break
    }
    console.log(nums[i])
}