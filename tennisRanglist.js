function tennisRanglist (input){
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let totalPoints = 0;
    let finalPoints = 0;
    let winnersCount = 0;

    for(i=2; i <= tournamentsCount+1; i++){
        if (input[i]=== "W"){
            totalPoints += 2000;
            winnersCount++
        }
        else if(input[i]=== "F"){
            totalPoints += 1200
        }else{totalPoints += 720}
    }finalPoints = startingPoints + totalPoints;
    averagePoints = (finalPoints - startingPoints) / tournamentsCount;
    percentWonTour = winnersCount / tournamentsCount * 100
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentWonTour.toFixed(2)}%`)
}
tennisRanglist 
([  "5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"     ])