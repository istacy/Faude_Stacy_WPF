//Stacy Faude
//11-13-13
//Conditionals - Personal Calculation

var apples = 5
var bananas = 6
var oranges = 3

alert("There are currently " + apples + " apples, " + bananas + " bananas, " + oranges + " oranges");

var eat = prompt("How many apples would you like to eat?", "1");

var eaten = parseInt(eat);
if(eaten > 5){
    console.log("Sorry but there are only 5 apples. You can not eat " + eaten + " apples!");
} else {
    apples -= eaten;
    console.log("Now there are only " + apples + " apples!");
}