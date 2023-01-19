function fishing(input){
    let budget = Number(input[0]);
    let season = (input[1]);
    let fishers = (input[2]);
    let price = 0;
    switch (season){
        case "Spring": price = 3000;
        if (fishers <= 6){price = price * 0.90}
        else if (fishers >= 7 && fishers <=11){price = price * 0.85}
        else if(fishers >= 12){price = price * 0.75};break;

        case "Winter": price = 2600;
        if (fishers <= 6){price = price * 0.90}
        else if (fishers >= 7 && fishers <=11){price = price * 0.85}
        else if(fishers >= 12){price = price * 0.75};break;

        default : price = 4200;
        if (fishers <= 6){price = price * 0.90}
        else if (fishers >= 7 && fishers <=11){price = price * 0.85}
        else if(fishers >= 12){price = price * 0.75};break;
    }
    if(season !== "Autumn" && fishers % 2 === 0){price = price * 0.95};

    if (budget >= price){
        moneyLeft = budget - price;
        console.log (`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    }
    else if (price > budget){moneyNeeded = price - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)};


}
fishing (["3000",
"Spring",
"11"])