// Stacy Faude
// Date: 11-3-13
// Assignment:  Expressions Wacky

//What am I calculating?
//Price per mile picking up my friends

//Enter Your Information

alert("Please fill up your car with gas before starting!");

var startingMiles = prompt("Please enter your cars current mileage.");

var gasUsed = prompt("Please enter how many gallons of gas you purchased.");

var gasPrice = prompt("Please enter the price per gallon.");

var endMiles = prompt("Please enter your ending milage.");

//var pickingUp = prompt("What friend are you picking up? \n  Please select 1-5" + myFriends[0]);
//var myFriends = ["Matthew", "Tyler", "Stephanie", "Liz", "Kira"];

//alert("These are your friends you are picking up:" (myFriends[0], myFriends[1], myFriends[2], myFriends[3], myFriends[4], myFriends[5]));
//mpg = (endMiles - startingMiles) / gasUsed

var milesDriven = endMiles - startingMiles;

var milesPerGallon = milesDriven / gasUsed;

var pricePerMile = milesPerGallon / gasPrice;

var info = prompt("You have driven " + milesDriven + " and get about " + milesPerGallon + " miles per gallon, spending about " + pricePerMile + "cents per mile.");

console.log(milesPerGallon);