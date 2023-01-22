function schoolLager(input) {
    let season = (input[0]);
    let typeGroup = (input[1]);
    let studentsCount = Number(input[2]);
    let nigts = Number(input[3]);
    let sum = 0;
    let sport = "";
    if (season === "Winter") {
        if (typeGroup === "boys" || typeGroup === "girls") {
            pricePerPerson = 9.60;
        }
        else { pricePerPerson = 10 }
    }
    else if (season === "Spring") {
        if (typeGroup === "boys" || typeGroup === "girls") {
            pricePerPerson = 7.20;
        }
        else { pricePerPerson = 9.50 }
    }
    else if (season === "Summer") {
        if (typeGroup === "boys" || typeGroup === "girls") {
            pricePerPerson = 15;
        }
        else { pricePerPerson = 20 }
    }
    switch (season) {
        case "Winter":
            switch(typeGroup){
                case "boys": sport = "Judo";break;
                case "girls": sport = "Gymnastics";break;
                case "mixed": sport = "Ski";break;
            };break;
            case "Spring":
            switch(typeGroup){
                case "boys": sport = "Tennis";break;
                case "girls": sport = "Athletics";break;
                case "mixed": sport = "Cycling";break;
            };break;
            case "Summer":
            switch(typeGroup){
                case "boys": sport = "Football";break;
                case "girls": sport = "Volleyball";break;
                case "mixed": sport = "Swiming";break;
            };break;

    }sum = studentsCount * pricePerPerson * nigts
    if(studentsCount >= 50){sum = sum * 0.50}
    else if(studentsCount >= 20 && studentsCount <50){sum = sum * 0.85}
    else if(studentsCount >= 10 && studentsCount <20){sum = sum * 0.95}

console.log(`${sport} ${sum.toFixed(2)} lv.`)


}
 schoolLager(["Summer", "boys", "9", "15"])