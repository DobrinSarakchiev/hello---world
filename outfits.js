function outfits(input){
    let degrees = Number(input[0]);
    let time = input(1);
    switch(time){
        case "Morning":if(degrees >= 10 && degrees <= 18){console.log (`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`)}
        else if(degrees > 18 && degrees <= 24){console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)}
        else if(degrees >= 25){console.log(`It's ${degrees} degrees, get your T-shirt and Sandals.`)};break;

        case "Afternoon": if (degrees >= 10 && degrees <= 24){console.log (`It's ${degrees} degrees, get your Shirt and Moccasins.`)}
        else if(degrees > 18 && degrees <= 24){console.log(`It's ${degrees} degrees, get your T-shirt and Sandals.`)}
        else if(degrees >= 25){console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot`)};break;

        case "Evening": if (degrees >= 10 && degrees <= 24){console.log (`It's ${degrees} degrees, get your Shirt and Moccasins.`)}
        else if (degrees >= 10 && degrees <= 24){console.log (`It's ${degrees} degrees, get your Shirt and Moccasins.`)}
        else if (degrees >= 25){console.log (`It's ${degrees} degrees, get your Shirt and Moccasins.`)}
    }








}
outfits (["16", "Morning"])
//"It's {градуси} degrees, get your {облекло} and {обувки}."
//10 <= градуси <= 18 Outfit = Sweatshirt Shoes = Sneakers Outfit = Shirt Shoes = Moccasins Outfit = Shirt Shoes = Moccasins