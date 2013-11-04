// Stacy Faude
// Date: 11-3-13
// Assignment:  Expressions Wacky

//What am I calculating?
//Price per mile picking up my friends

//Enter Your Information

//This is an alert
alert("Please fill up your car with gas before starting!");

//This is where you enter your Starting Mileage
var startingMiles = prompt("Please enter your cars current mileage.");

//This is where you enter how many gallons of gas you purchased
var gasUsed = prompt("Please enter how many gallons of gas you purchased.");

//This is where you enter the price per gallon
var gasPrice = prompt("Please enter the price per gallon.");

//This is where you enter your ending mileage
var endMiles = prompt("Please enter your ending mileage.");

//var pickingUp = prompt("What friend are you picking up?);
//var myFriends = ["Matthew", "Tyler", "Stephanie", "Liz", "Kira"];

//alert("These are your friends you are picking up:" (myFriends[0], myFriends[1], myFriends[2], myFriends[3], myFriends[4], myFriends[5]));


//Calculations
//mpg = (endMiles - startingMiles) / gasUsed

//This Calculates the total miles driven
var milesDriven = endMiles - startingMiles;

//This calculates your miles per gallon
var milesPerGallon = milesDriven / gasUsed;

//This calculates the price per mile
var pricePerMile = milesPerGallon / gasPrice;

//This is my output
var info = prompt("You have driven " + milesDriven + " and get about " + milesPerGallon + " miles per gallon, spending about " + pricePerMile + "cents per mile.");

console.log(milesPerGallon);