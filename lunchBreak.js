function lunchBreak(input){
    let movieName = (input[0]);
    let movieDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    let lunchTime = 1/8 * breakDuration;
    let otdihTime = 1/4 * breakDuration;
    let totalTimeNeeded = lunchTime + otdihTime + movieDuration;
    if (breakDuration >= totalTimeNeeded){
        leftTime = breakDuration - totalTimeNeeded;
        console.log(`You have enough time to watch ${movieName} and left with ${leftTime} minutes free time.`)

    }
    else { neededTime = totalTimeNeeded - breakDuration;
    console.log (`You don't have enough time to watch ${movieName}, you need ${Math.ceil(neededTime)} more minutes.`)
}

}
lunchBreak (["Teen Wolf",

"48",

"60"])