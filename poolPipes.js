function poolPipes (input){
    let poolVolum = Number(input[0]);
    let debitPipe1 = Number(input[1]);
    let debitPipe2 = Number(input[2]);
    let time = Number(input[3]);
    let waterPipe1 = debitPipe1 * time;
    let waterPipe2 = debitPipe2 * time;
    let mutualWater = waterPipe1 + waterPipe2;
    let busyPercent = mutualWater / poolVolum * 100;
    let percentPipe1 = waterPipe1 / mutualWater * 100;
    let percentPipe2 = waterPipe2 / mutualWater * 100;
    if (mutualWater <= poolVolum){
        console.log (`The pool is ${busyPercent.toFixed(2)}% full. Pipe 1: ${percentPipe1.toFixed(2)}%. Pipe 2: ${percentPipe2.toFixed(2)}%.`)

    }
    else {
        let overWater = mutualWater - poolVolum;
        console.log (`For ${time.toFixed(2)} hours the pool overflows with ${overWater.toFixed(2)} liters.`)
    }
    

    



}
poolPipes(["1000", "100", "120", "3"])