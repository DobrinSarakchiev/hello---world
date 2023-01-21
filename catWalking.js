function cat(input){
    let walkingMins = Number(input[0]);
    let walkingsCount = Number(input[1]);
    let takenCalories = Number(input[2]);
    let totalMins = walkingMins * walkingsCount;
    let burnCalories = totalMins * 5;
    if (burnCalories >= (takenCalories / 2)){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnCalories}.`)
    }else { console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnCalories}.`)}







}
cat(["15", "2", "500"])