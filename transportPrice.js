function transportPrice(input){
let km = Number(input[0]);
let time = (input[1]);
let sumTaxi = 0;
let busSum = 0;
let trainSum = 0;
if (km < 20){
    switch(time){
     case "day" : sumTaxi = km * 0.79 + 0.70; console.log(sumTaxi.toFixed(2)); break;
     case "night" : sumTaxi = km * 0.90 + 0.70; console.log(sumTaxi.toFixed(2)); break;
    }
}else if (km >= 20 && km < 100){
    busSum = km * 0.09; console.log(busSum.toFixed(2))
}else {trainSum = km * 0.06; console.log(trainSum.toFixed(2))}







}
transportPrice(["5", "day"])