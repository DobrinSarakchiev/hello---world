function harvest(input){
    let vineyardArea = Number(input[0]);
    let grapeFrom1m = Number(input[1]);
    let neededLittersWine = Number(input[2]);
    let workerCount = Number(input[3]);
    let harvestInKg = vineyardArea * grapeFrom1m;
    let grapeForWine = harvestInKg * 0.40;
    let quantityWine = grapeForWine / 2.50;
    if(neededLittersWine > quantityWine){
        let neededWine = neededLittersWine - quantityWine;
        console.log(`It will be a tough winter! More ${Math.floor(neededWine)} liters wine needed.`)
    }
    else{ quantityWine >= neededLittersWine
        let wineLeft = quantityWine - neededLittersWine;
        let winePerWorker = wineLeft / workerCount;
        console.log(`Good harvest this year! Total wine: ${Math.floor(quantityWine)} liters.`)
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`)
    }
    
    


    

}
harvest(["650", "2", "175", "3"])