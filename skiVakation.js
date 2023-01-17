function skiVacation(input){
let days = Number(input[0]);
let typeRoom = (input[1]);
let feedBack = (input[2]);
let nights = days - 1;
let sum = 0;
switch(typeRoom){
    case "apartment": if (nights < 10){sum = (nights * 25) * 0.70}
    else if (nights >= 10 && nights <= 15){sum = (nights * 25) * 0.65}
    else {sum = (nights * 25) * 0.50};break;
    case "president apartment" :if (nights < 10){sum = (nights * 35) * 0.90}
    else if (nights >= 10 && nights <= 15){sum = (nights * 35) * 0.85}
    else {sum = (nights * 35) * 0.80};break;
    default : sum = nights * 18
}if (feedBack === "negative"){sum = sum * 0.90}
else {sum = sum * 1.25}
console.log(sum.toFixed(2))


}
skiVacation (["12",
"room for one person",
"positive"])