function salarySize(input){
    let openTab = Number(input[0]);
    let salary = Number(input[1]);
    for (i = 2; i <= openTab + 1; i ++)
    if(input[i] === "Facebook"){
        salary -= 150
    }else if(input[i] === "Instagram"){
        salary -= 100
    }else if(input[i] === "Reddit"){
        salary -= 50
    }
    if (salary <= 0){
    console.log ("You have lost your salary.")}
    else {console.log (salary)}

}
salarySize (["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg", "Facebook"])