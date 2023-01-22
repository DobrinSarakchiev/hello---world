function schoolCamp (input){
    let season = input[0];
    let typeGroup = input[1];
    let studentsCount = Number(input[2]);
    let nigts = Number(input[3]);
    let sport = "";
    let sum = 0;
switch(season){
    case "Winter": 
    if (typeGroup === "boys"){pricePerStudent = 9.60; sport = "Judo"}
    else if (typeGroup === "girls"){pricePerStudent = 9.60; sport = "Gymnastics"}
    else {pricePerStudent = 10.00; sport = "Ski"};break;
    case "Spring" :
        if (typeGroup === "boys"){pricePerStudent = 7.20; sport = "Tennis"}
        else if (typeGroup === "girls"){pricePerStudent = 7.20; sport = "Athletics"}
    else {pricePerStudent = 9.50; sport = "Cycling"};break;
    case "Summer" :
        if (typeGroup === "boys"){pricePerStudent = 15; sport = "Football"}
        else if (typeGroup === "girls"){pricePerStudent = 15; sport = "Volleyball"}
    else {pricePerStudent = 20; sport = "Swimming"};break;
}sum = pricePerStudent * nigts* studentsCount;
if (studentsCount >= 10 && studentsCount < 20){sum *= 0.90}
else if (studentsCount >= 20 && studentsCount <50){sum *= 0.85}
else if (studentsCount >= 50){sum *= 0.50};
console.log (`${sport} ${sum.toFixed(2)} lv.`)

}