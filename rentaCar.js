function rentaCar(input) {
    let budget = Number(input[0]);
    let season = (input[1]);
    let car = 0;
    let typeClas = 0;
    switch (season) {
        case "Summer": car = "Cabrio"; break;
        case "Winter": car = "Jeep"; break;
    }
    if (budget <= 100) {
        typeClas = "Economy class";
        if (season === "Summer") { moneySpent = budget * 0.35 }
        else { moneySpent = budget * 0.65 }
    }
    else if (budget > 100 && budget <= 500) {
        typeClas = "Compact class";
        if (season === "Summer") { moneySpent = budget * 0.45 }
        else { moneySpent = budget * 0.80 }
    }
    else { typeClas = "Luxury class"; car = "Jeep"; moneySpent = budget * 0.90 }


    console.log(typeClas)
    console.log(`${car} - ${moneySpent.toFixed(2)}`)


}
rentaCar(["1000", "Summer"])