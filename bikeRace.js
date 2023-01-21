function bikeRace(input) {
    let junuorCount = Number(input[0]);
    let seniorCount = Number(input[1]);
    let typeTrace = (input[2]);
    let sum = 0;
    switch (typeTrace) {
        case "trail": junuorFee = 5.50; seniorFee = 7;
            sum = (seniorCount * seniorFee + junuorCount * junuorFee) * 0.95; break;
        case "cross-country": junuorFee = 8; seniorFee = 9.50;
            sum = (seniorCount * seniorFee + junuorCount * junuorFee) * 0.95;
            if ((seniorCount + junuorCount) >= 50)
            { sum = ((seniorCount * seniorFee + junuorCount * junuorFee) * 0.75) * 0.95 } break;
        case "downhill": junuorFee = 12.25; seniorFee = 13.75;
            sum = (seniorCount * seniorFee + junuorCount * junuorFee) * 0.95; break;
        case "road": junuorFee = 20; seniorFee = 21.50;
            sum = (seniorCount * seniorFee + junuorCount * junuorFee) * 0.95; break;
    } console.log(sum.toFixed(2))
}
bikeRace(["10", "20", "trail"])