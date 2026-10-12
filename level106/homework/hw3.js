// 3) მოცემულია მასივი: numbers = [-5, 10, -3, 0, 8, -1, 15]. მიიღე მასივი, სადაც მხოლოდ დადებითი რიცხვები იქნება (0-ის ჩათვლით).

let numbers = [-5, 10, -3, 0, 8, -1, 15]

let newList = numbers.filter(function(nums) {
    if(nums >= 0) {
        return nums
    }
})

console.log(newList)