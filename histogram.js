function histogram(input){
    let numberCount = Number(input[0]);
    let p1count = 0;
    let p2count = 0;
    let p3count = 0;
    let p4count = 0;
    let p5count = 0;
    for (i = 1; i <= numberCount; i++){
        if (Number(input[i])<200){
            p1count++
        }
        else if(Number(input[i])<=399){
            p2count++
        }
        else if (Number(input[i])<=599){
            p3count++
        }
        else if (Number(input[i])<=799){
            p4count++
        }
        else {p5count++}}
        p1percent = p1count/numberCount * 100;
        p2percent = p2count/numberCount * 100;
        p3percent = p3count/numberCount * 100;
        p4percent = p4count/numberCount * 100;
        p5percent = p5count/numberCount * 100;

        console.log(`${p1percent.toFixed(2)}%`)
        console.log(`${p2percent.toFixed(2)}%`)
        console.log(`${p3percent.toFixed(2)}%`)
        console.log(`${p4percent.toFixed(2)}%`)
        console.log(`${p5percent.toFixed(2)}%`)
    }