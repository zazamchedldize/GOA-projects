// 6). ელემენტის წაშლა და მის ადგილას ახლის ჩასმა
// let colors = ["red", "blue", "green", "yellow", "black", "white"];

// დავალება:

// წაშალე "green";
// მის ადგილას ჩასვი "purple";
// "black" შეცვალე "pink"-ით;
// პირველი ელემენტი გადაიტანე ბოლოში.

let colors = ["red", "blue", "green", "yellow", "black", "white"]

colors.splice(2,1,"purple")

colors[4] = "pink"

console.log(colors)