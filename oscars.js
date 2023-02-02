function oscars(input){
    let actorName = input[0];
    let pointsFromAcademy = Number(input[1]);
    let referesCount = Number (input[2]);
    let totalPoints = pointsFromAcademy;
    let nameLength = 0;


    for (i = 3; i <= referesCount*2 + 2 ; i+=2){
        nameLength = (input[i].length)
        pointFromRefere = Number(input[i+1])
        totalPoints += (nameLength * pointFromRefere) / 2;
        if (totalPoints >= 1250.5 ){
           console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);break;}

}if (totalPoints < 1250.5){neededPoint = 1250.5 - totalPoints;
    console.log(`Sorry, ${actorName} you need ${neededPoint.toFixed(1)} more!`)
}

}
oscars (["Sandra Bullock", "340", "5",
 "Robert De Niro", "50", 
 "Julia Roberts", "40.5", 
 "Daniel Day-Lewis", "39.4", 
 "Nicolas Cage", "29.9", 
 "Stoyanka Mutafova", "33"])