function personalTiles(input){
    let years = Number(input[0]);
    let sex = (input[1]);
    switch(sex){
        case "f":
            if(years < 16){console.log ("Miss")}
            else {console.log("Ms.")};break;
         case "m" : 
         if (years>= 16){console.log("Mr.")}
         else{console.log ("Master")};break;
    }
}
personalTiles(["18","m"])