function commissions(input){
    let city = (input[0]);
    let sales = Number(input[1]);
    let bonus = 0

    switch(city){
        case "Sofia": if(sales >= 0 && sales <= 500){bonus = sales * 0.05; console.log (bonus.toFixed(2))}
        else if (sales > 500 && sales <= 1000){bonus = sales * 0.07; console.log (bonus.toFixed(2))}
        else if (sales > 1000 && sales <= 10000){bonus = sales * 0.08; console.log (bonus.toFixed(2))}
        else if (sales < 0){bonus = "error"; console.log(bonus)}
        else {bonus = sales * 0.12;console.log(bonus.toFixed(2))};break; 

        case "Varna": if(sales >= 0 && sales <= 500){bonus = sales * 0.045; console.log (bonus.toFixed(2))}
        else if (sales > 500 && sales <= 1000){bonus = sales * 0.075; console.log (bonus.toFixed(2))}
        else if (sales > 1000 && sales <= 10000){bonus = sales * 0.10 ; console.log (bonus.toFixed(2))}
        else if (sales < 0){bonus = "error"; console.log(bonus)}
        else {bonus = sales * 0.13; console.log (bonus.toFixed(2))};break;

        case "Plovdiv": if(sales >= 0 && sales <= 500){bonus = sales * 0.055; console.log (bonus.toFixed(2))}
        else if (sales > 500 && sales <= 1000){bonus = sales * 0.08; console.log (bonus.toFixed(2))}
        else if (sales > 1000 && sales <= 10000){bonus = sales * 0.12; console.log (bonus.toFixed(2))}
        else if (sales < 0){bonus = "error"; console.log(bonus)}
        else {bonus = sales * 0.145; console.log (bonus.toFixed(2))};break;

        default : console.log ("error");break;
        
    }
    
    
    
    
}
commissions (["Ploviv",
"-1"])