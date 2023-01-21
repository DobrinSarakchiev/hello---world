function truckDriver(input) {
    let season = (input[0]);
    let kmPerMounth = Number(input[1]);
    let salary = 0;
    switch (season) {
        case "Summer":
            if (kmPerMounth <= 5000) { salary = kmPerMounth * 4 * 0.90 }
            else if (kmPerMounth > 5000 && kmPerMounth <= 10000) { salary = kmPerMounth * 4 * 1.10 }; break;
        case "Winter":
            if (kmPerMounth <= 5000) { salary = kmPerMounth * 4 * 1.05 }
            else if (kmPerMounth > 5000 && kmPerMounth <= 10000) { salary = kmPerMounth * 4 * 1.25 }; break;
        case "Autumn":
        case "Spring":
            if (kmPerMounth <= 5000) { salary = kmPerMounth * 4 * 0.75 }
            else if (kmPerMounth > 5000 && kmPerMounth <= 10000) { salary = kmPerMounth * 4 * 0.95 }; break;
    }if (kmPerMounth > 10000 && kmPerMounth <= 20000){salary = kmPerMounth * 4 * 1.45};
    console.log ((salary*0.90).toFixed(2))

}
truckDriver(["Summer", "3455"])