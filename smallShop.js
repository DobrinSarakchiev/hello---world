function smallShop(input){
    let product = (input[0]);
    let city = (input[1]);
    let quantity = Number(input[2]);
	switch(city){
		case "Sofia":if (product === "coffee"){sum = quantity * 0.50;console.log(sum)}
		else if (product === "water"){sum = quantity * 0.80;console.log (sum)}
		else if (product === "beer"){sum = quantity * 1.20;console.log (sum)}
		else if (product === "sweets"){sum = quantity * 1.45;console.log (sum)}
		else if (product === "peanuts"){sum = quantity * 1.60;console.log (sum)};break;
		case "Plovdiv":if (product === "coffee"){sum = quantity * 0.40;console.log(sum)}
		else if (product === "water"){sum = quantity * 0.70;console.log (sum)}
		else if (product === "beer"){sum = quantity * 1.15;console.log (sum)}
		else if (product === "sweets"){sum = quantity * 1.30;console.log (sum)}
		else if (product === "peanuts"){sum = quantity * 1.50;console.log (sum)};break;
		case "Varna":if (product === "coffee"){sum = quantity * 0.45;console.log(sum)}
		else if (product === "water"){sum = quantity * 0.70;console.log (sum)}
		else if (product === "beer"){sum = quantity * 1.10;console.log (sum)}
		else if (product === "sweets"){sum = quantity * 1.35;console.log (sum)}
		else if (product === "peanuts"){sum = quantity * 1.55;console.log (sum)};break;}
}
smallShop (["coffee", "Sofia", "3"])