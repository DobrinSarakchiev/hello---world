function hotel(input) {
    let mounth = (input[0]);
    let night = Number(input[1]);
    let studio = 0;
    let apartment = 0;

    if (mounth === "May" || mounth === "October") {
        studio = 50 * night;
        apartment = 65 * night;
        if (night > 14) {
            studio = studio * 0.70;
            apartment = apartment * 0.90
        }
        else if (night > 7 && night < 14) { studio = studio * 0.95 }
    }
    else if(mounth === "June" || mounth === "September"){
        studio = 75.20 * night;
        apartment = 68.70 * night;
        if (night > 14) {
            studio = studio * 0.80;
            apartment = apartment * 0.90}
    }
    else if(mounth === "July" || mounth === "August"){
        studio = 76 * night;
        apartment = 77 * night;
        if (night > 14) {
            apartment = apartment * 0.90}
    }


    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);


}
hotel(["October",

    "10"])