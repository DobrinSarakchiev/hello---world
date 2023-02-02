function backToThePast (input){
    let moneyWon = Number(input[0]);
    let pastYear = Number(input[1]);
    let age = 18;
    let moneySpent = 0;

    for(i=1800; i <= pastYear; i++){
        if (i % 2 === 0){moneySpent += 12000
        }
        else{moneySpent += 12000 + 50*age
        } age ++
    }
    if (moneyWon >= moneySpent){
        moneyLeft = moneyWon - moneySpent;
        console.log (`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`)
    }else {moneyNeeded = moneySpent - moneyWon;
        console.log (`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`)
    }


}
backToThePast (["100000.15", "1808"])