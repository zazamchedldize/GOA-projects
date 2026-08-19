// 8)let grade = "B";


// switch-ით:

// "A" → "Excellent"
// "B" → "Very Good"
// "C" → "Good"
// "D" → "Passed"
// "F" → "Failed"
// სხვა → "Invalid grade"

let grade = "B"

switch (grade) {
    case 'A':
        console.log("Excellent")
        break
    case 'B':
        console.log("Very Good")
        break
    case 'C':
        console.log("Good")
        break
    case 'D':
        console.log("Passed")
        break
    case 'F':
        console.log("Failed")
        break
    default:
        console.log("Invalid grade") 
        break                   
}