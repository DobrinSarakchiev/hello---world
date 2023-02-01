function cleverLili(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let moneyWon = 0;
    let birthdayMoney = 10;
    for (i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyWon += birthdayMoney;
            moneyWon -= 1;
            birthdayMoney += 10
        }
        else { moneyWon += pricePerToy }
    }
    if (moneyWon >= washingMachinePrice) {
        moneyLeft = moneyWon - washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`)
    }
    else {
        moneyNeeded = washingMachinePrice - moneyWon
        console.log(`No! ${moneyNeeded.toFixed(2)}`)
    }


}
cleverLili (["21",

"1570.98",

"3"])