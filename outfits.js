function summerOutfit(input){
    let degrees = Number(input[0]);
    let time = (input[1]);
    let outfit;
    let shoes;
    if (degrees >= 10 && degrees <=18){
        if(time === "Morning"){
            shoes = "Sneakers";
            outfit = "Sweatshirt";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)}

          else if (time === "Afternoon" || time === "Evening") {
            shoes = "Moccasins";
            outfit = "Shirt";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
          } 
        }
        else if (degrees > 18 && degrees <=24){
            if (time === "Afternoon"){
                shoes = "Sandals";
                outfit = "T-Shirt";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            }
            else if (time === "Morning" || time === "Evening"){
                shoes = "Moccasins";
                outfit = "Shirt";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            }
        }
        else if (degrees >= 25){
            if (time === "Morning"){
                shoes = "Sandals";
                outfit = "T-Shirt";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            }
            else if (time === "Afternoon"){
                shoes = "Barefoot";
                outfit = "Swim Suit";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            }
            else if (time === "Evening"){
                shoes = "Moccasins";
                outfit = "Shirt";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            }
        }
    }
    summerOutfit(["20","Afternoon"])