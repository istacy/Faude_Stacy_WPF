// Stacy Faude
// Date: 11-3-13
// Assignment:  Expressions Personal

//What am I calculating?
//Price per mile picking up my friends

//Enter Your Information

alert("Please fill up your car with gas before starting!");

var startingMiles = prompt("Please enter your cars current mileage.");

var gasPrice = prompt("Please enter the price per gallon.");

var myFriends = new Array();
    myFriends["Matthew"]=21;
    myFriends["Tyler"]=55;
    myFriends["Stephanie"]=157;
    myFriends["Liz"]=653;
    myFriends["Kira"]=478;

var gasUsed = prompt("Please enter how many gallons of gas you purchased.");

var endMiles = prompt("Please enter your ending milage.")


//mpg = (endMiles - startingMiles) / gasUsed

//var pickingUp = prompt("What friend are you picking up? \n  Please select 1-5" + myFriends[0]);

var pricePerGallon = ((endMiles - startingMiles) / gasUsed) / gasPrice