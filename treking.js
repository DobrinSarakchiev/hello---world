function treking(input){
    let groupsCount = Number(input[0]);
    let trekingMusala = 0;
    let trekingMonblan = 0;
    let trekingKilimanjaro = 0;
    let trekingK2 = 0;
    let trekingEverest = 0;
    let totalAlpinists = 0;

    for (i = 1; i <= groupsCount; i++){
        totalAlpinists +=Number(input[i]);
        if(Number(input[i] <= 5)){
            trekingMusala += Number(input[i])
    }else if (Number(input[i]) <= 12){
        trekingMonblan += Number(input[i])
    }else if (Number(input[i]) <= 25){
        trekingKilimanjaro += Number(input[i]) 
    }else if (Number(input[i]) <= 40){
        trekingK2 += Number(input[i])
    }else{trekingEverest += Number(input[i])}
}
trekingMusalaPercent = trekingMusala / totalAlpinists * 100;
trekingMonblanPercent = trekingMonblan / totalAlpinists * 100;
trekingKilimanjaroPercent = trekingKilimanjaro / totalAlpinists * 100;
trekingK2Percent = trekingK2 / totalAlpinists * 100;
trekingEverestPercent = trekingEverest / totalAlpinists * 100;

console.log(`${trekingMusalaPercent.toFixed(2)}%`)
console.log(`${trekingMonblanPercent.toFixed(2)}%`)
console.log(`${trekingKilimanjaroPercent.toFixed(2)}%`)
console.log(`${trekingK2Percent.toFixed(2)}%`)
console.log(`${trekingEverestPercent.toFixed(2)}%`)
}
treking (["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])