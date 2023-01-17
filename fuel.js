function fuelTank(input){
    let typeFuel = (input[0]);
    let availableFuel = Number(input[1]);
    if (availableFuel >= 25){
        switch(typeFuel){
            case "Diesel" : console.log("You have enough diesel.");break;
            case "Gasoline" : console.log ("You have enough gasoline.");break;
                }
            }
                else {
                    switch(typeFuel){
                        case "Diesel" : console.log ("Fill your tank with diesel!"); break;
                        case "Gasoline" : console.log ("Fill your tank with gasoline."); break;
                    }
                }if (typeFuel === "Kerosene"){
                    console.log("Invalid fuel!")
                }if(typeFuel === "Gass"){
                    availableFuel = availableFuel * 1.5;
                    if (availableFuel >= 25){console.log("You have enought gass.")}
                    else{console.log("Fill your tank with gass")}
                }
 
 
            }
 
fuelTank(["Gass", "25"])