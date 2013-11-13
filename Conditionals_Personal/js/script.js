//Stacy Faude
//11-13-13
//Conditionals - Personal Calculation

var apples = 5
var bananas = 6
var oranges = 3

function eatApples(){

    alert("There are currently " + apples + " apples, " + bananas + " bananas, " + oranges + " oranges.");

    var eat    = prompt("How many apples would you like to eat?", "1");
    var eaten  = parseInt(eat);

    if(isNaN(eaten)){
        alert("You must enter a valid number of apples!");
        eatApples();
    } else if(eaten > apples){
        alert("Sorry, but there are only " + apples + " apples.  You can not eat " + eaten + " apples!");
        eatApples();
    } else if(eaten < 0){
        alert("Sorry, but you can not eat less than 0 apples!");
        eatApples();
    } else {
        apples -= eaten;
        alert("Now there are only " + apples + " apples!");
        if(apples > 0){
            if(confirm("Would you like to eat more apples?"))
                eatApples();
            }
     {
            alert("All of the apples are now gone!");
        }
    }
}