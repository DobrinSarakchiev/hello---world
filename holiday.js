function holiday(input){
    let budget = Number(input[0]);
    let season = (input[1]);
    let destnation = 0;
    let typeRoom = 0;
    switch(season){
        case "Winter" : destnation = "Morocco"
        if(budget <= 1000){typeRoom = "Camp"; moneySpent = budget * 0.45}
        else if(budget >1000 && budget < 3000){typeRoom = "Hut"; moneySpent = budget * 0.60}
        else {typeRoom = typeRoom = "Hotel"; moneySpent = budget * 0.90};break;
        case "Summer" : destnation = "Alaska"
        if(budget <= 1000){typeRoom = "Camp"; moneySpent = budget * 0.65}
        else if(budget >1000 && budget < 3000){typeRoom = "Hut"; moneySpent = budget * 0.80}
        else {typeRoom = typeRoom = "Hotel"; moneySpent = budget * 0.90};break;
    }
    console.log(`${destnation} - ${typeRoom} - ${moneySpent.toFixed(2)}`)

}
holiday(["800", "Summer"])