function fuel(input){
    typeFuel = (input[0]);
    fuelQuantity = Number(input[1]);
    cardAvailable = (input[2]);
    let fuelSum = 0
    switch (typeFuel){
        case "Gas": fuelSum = fuelQuantity * 0.93;
        if (cardAvailable === "Yes"){fuelSum = fuelQuantity * 0.85};break;
        case "Gasoline": fuelSum  = fuelQuantity * 2.22;
        if (cardAvailable === "Yes"){fuelSum = fuelQuantity * 2.04};break;
        case "Diesel": fuelSum = fuelQuantity * 2.33;
        if (cardAvailable === "Yes"){fuelSum = fuelQuantity * 2.21};break;
    }if (fuelQuantity >= 20 && fuelQuantity <= 25){fuelSum = fuelSum * 0.92}
    else if(fuelQuantity > 25){fuelSum = fuelSum * 0.90}






console.log (fuelSum.toFixed(2) + " lv.")
}
fuel(["Gas", "30", "Yes"])