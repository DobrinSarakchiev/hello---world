function fruitShop(input){
    let fruit =(input[0]);
    let day = (input[1]);
    let quantity = Number(input[2]);
    switch (day){
        case "Monday" : if (fruit === "banana"){sum = quantity * 2.50; console.log (sum.toFixed(2))}
        else if (fruit === "apple"){sum = quantity * 1.2; console.log (sum.toFixed(2))}
        else if (fruit === "orange"){sum = quantity * 0.85; console.log (sum.toFixed(2))}
        else if (fruit === "grapefruit"){sum = quantity * 1.45; console.log (sum.toFixed(2))}
        else if (fruit === "kiwi"){sum = quantity * 2.70; console.log (sum.toFixed(2))}
        else if (fruit === "pineapple"){sum = quantity * 5.50; console.log (sum.toFixed(2))}
        else if (fruit === "grapes"){sum = quantity * 3.85; console.log (sum.toFixed(2))};break;

        case "Tuesday" : if (fruit === "banana"){sum = quantity * 2.50; console.log (sum.toFixed(2))}
        else if (fruit === "apple"){sum = quantity * 1.2; console.log (sum.toFixed(2))}
        else if (fruit === "orange"){sum = quantity * 0.85; console.log (sum.toFixed(2))}
        else if (fruit === "grapefruit"){sum = quantity * 1.45; console.log (sum.toFixed(2))}
        else if (fruit === "kiwi"){sum = quantity * 2.70; console.log (sum.toFixed(2))}
        else if (fruit === "pineapple"){sum = quantity * 5.50; console.log (sum.toFixed(2))}
        else if (fruit === "grapes"){sum = quantity * 3.85; console.log (sum.toFixed(2))};break;

        case "Wednesday" : if (fruit === "banana"){sum = quantity * 2.50; console.log (sum.toFixed(2))}
        else if (fruit === "apple"){sum = quantity * 1.2; console.log (sum.toFixed(2))}
        else if (fruit === "orange"){sum = quantity * 0.85; console.log (sum.toFixed(2))}
        else if (fruit === "grapefruit"){sum = quantity * 1.45; console.log (sum.toFixed(2))}
        else if (fruit === "kiwi"){sum = quantity * 2.70; console.log (sum.toFixed(2))}
        else if (fruit === "pineapple"){sum = quantity * 5.50; console.log (sum.toFixed(2))}
        else if (fruit === "grapes"){sum = quantity * 3.85; console.log (sum.toFixed(2))};break;

        case "Thursday" : if (fruit === "banana"){sum = quantity * 2.50; console.log (sum.toFixed(2))}
        else if (fruit === "apple"){sum = quantity * 1.2; console.log (sum.toFixed(2))}
        else if (fruit === "orange"){sum = quantity * 0.85; console.log (sum.toFixed(2))}
        else if (fruit === "grapefruit"){sum = quantity * 1.45; console.log (sum.toFixed(2))}
        else if (fruit === "kiwi"){sum = quantity * 2.70; console.log (sum.toFixed(2))}
        else if (fruit === "pineapple"){sum = quantity * 5.50; console.log (sum.toFixed(2))}
        else if (fruit === "grapes"){sum = quantity * 3.85; console.log (sum.toFixed(2))};break;

        case "Friday" : if (fruit === "banana"){sum = quantity * 2.50; console.log (sum.toFixed(2))}
        else if (fruit === "apple"){sum = quantity * 1.2; console.log (sum.toFixed(2))}
        else if (fruit === "orange"){sum = quantity * 0.85; console.log (sum.toFixed(2))}
        else if (fruit === "grapefruit"){sum = quantity * 1.45; console.log (sum.toFixed(2))}
        else if (fruit === "kiwi"){sum = quantity * 2.70; console.log (sum.toFixed(2))}
        else if (fruit === "pineapple"){sum = quantity * 5.50; console.log (sum.toFixed(2))}
        else if (fruit === "grapes"){sum = quantity * 3.85; console.log (sum.toFixed(2))};break;

        case "Saturday" : if (fruit === "banana"){sum = quantity * 2.70; console.log (sum.toFixed(2))}
        else if (fruit === "apple"){sum = quantity * 1.25; console.log (sum.toFixed(2))}
        else if (fruit === "orange"){sum = quantity * 0.90; console.log (sum.toFixed(2))}
        else if (fruit === "grapefruit"){sum = quantity * 1.60; console.log (sum.toFixed(2))}
        else if (fruit === "kiwi"){sum = quantity * 3.00; console.log (sum.toFixed(2))}
        else if (fruit === "pineapple"){sum = quantity * 5.60 ; console.log (sum.toFixed(2))}
        else if (fruit === "grapes"){sum = quantity * 4.20; console.log (sum.toFixed(2))};break;

        case "Sunday" : if (fruit === "banana"){sum = quantity * 2.70; console.log (sum.toFixed(2))}
        else if (fruit === "apple"){sum = quantity * 1.25; console.log (sum.toFixed(2))}
        else if (fruit === "orange"){sum = quantity * 0.90; console.log (sum.toFixed(2))}
        else if (fruit === "grapefruit"){sum = quantity * 1.60; console.log (sum.toFixed(2))}
        else if (fruit === "kiwi"){sum = quantity * 3.00; console.log (sum.toFixed(2))}
        else if (fruit === "pineapple"){sum = quantity * 5.60; console.log (sum.toFixed(2))}
        else if (fruit === "grapes"){sum = quantity * 4.20; console.log (sum.toFixed(2))};break;
        default : console.log ("error")
    }
    if (fruit !== "apple" && fruit !== "pineapple" && fruit !== "banana" && fruit !== "orange" && fruit !== "grapefruit" && fruit !== "kiwi" && fruit !== "grapes"){console.log("error")}
}
fruitShop (["tomato",
"Tuesday",
"2"])