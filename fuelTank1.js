function fuelTank(input){
    let typeFuel = (input[0]);
    let availableFuel = Number(input[1]);
    switch (typeFuel){
        case "Gasoline": if(availableFuel >= 25){console.log("You have enough gasoline.")}
        else {console.log("Fill your tank with gasoline!")};break;
        case "Diesel" : if (availableFuel >= 25){console.log("You have enough diesel.")} 
        else {console.log("Fill your tank with diesel!")};break;
        case "Gas" : if (availableFuel >= 25){console.log("You have enough gas.")}
        else {console.log("Fill your tank with gas!")};break;
        default : console.log ("Invalid fuel!")

    }
    
}

fuelTank(["Gas","30"])