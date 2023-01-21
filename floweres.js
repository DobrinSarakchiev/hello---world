function flowers(input) {
    let crCount = Number(input[0]);
    let rCount = Number(input[1]);
    let tCount = Number(input[2]);
    let season = (input[3]);
    let holiday = (input[4]);
    let sum = 0;
    switch(season){
        case "Spring" :crPrice = 2.00; rPrice = 4.10; tPrice = 2.50;
        sum = crCount * 2 + rCount * 4.10 + tCount * 2.50;
        if (tCount > 7){sum = sum *0.95}; break;
        
        case "Summer" :crPrice = 2.00; rPrice = 4.10; tPrice = 2.50;
        sum = crCount * 2 + rCount * 4.10 + tCount * 2.50;break;

        case "Autumn" :crPrice = 3.75; rPrice = 4.50; tPrice = 4.15;
        sum = crCount * 3.75 + rCount * 4.50 + tCount * 4.15;break;

        case "Winter" :crPrice = 3.75; rPrice = 4.50; tPrice = 4.15
        sum = crCount * 3.75 + rCount * 4.50 + tCount * 4.15
        if (rCount >= 10){sum = sum * 0.90};break;
    }
    if (holiday === "Yes"){sum = sum * 1.15;
    }if ((rCount + crCount + tCount)>20){sum = sum * 0.80}
    console.log((sum + 2).toFixed(2))


}

flowers(["2", "4", "8", "Spring", "Yes"])