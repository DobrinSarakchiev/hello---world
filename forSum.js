function forSum (input){
    let num = String(input[0]);
    let sum = 0;
for(let i=0; i < num.length; i++){
    let curentNumber = Number(num[i])
    sum = sum+=curentNumber

}
console.log(`The sum of the digits is:${sum}`)






}
forSum(["564891"])