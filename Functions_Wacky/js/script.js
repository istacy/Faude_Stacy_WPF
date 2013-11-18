//Stacy Faude
//Functions - Wacky Calculator
//Nov 17, 2013

//Calculates your Blood Alcohol Content based on the quantity of beverages consumed
//fluid ounces consumed: Beer-12oz, WineGlass-4oz, Shot-1.5oz
//Alcohol percentage in beverage: Beer-4-4.5%, Wine-15-20%, Shot-30-50%
//Hours consuming drink

var userAlert = alert("This will calculate your Blood Alcohol Content");

function solveBAC(result) {
    var ounces = prompt("Enter the number of ounces you drank: ");
    var percent = prompt("Enter the percent of alcohol in your drinks: ");
    var weight = prompt("Enter your weight: ");
    var hours = prompt("Enter the number of hours you have been drinking: ");

//Calculation for BAC
    var result = (ounces * percent * 0.075 / weight) - (hours * 0.015);

    if (result < 0) {
        console.log("There is a negligible amount of alcohol in your system.  You are not legally intoxicated.");
    } else {
        if (result == "NaN")
            console.log("Please try again.");
        if (result > 0.08)
            console.log("In MOST and possibly ALL states you would be considered intoxicated and arrested for DUI!!!");
        if (result < 0.08)
            console.log("You are not legally intoxicated!");
    }
}
solveBAC();