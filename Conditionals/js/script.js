//Conditional Logic - Logical Operators

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery){
    console.log("We can buy the phone!");
}else {
    console.log("No phone for you!!");
}

// a!=b the same as !(a===b)
//a<b the same as !(a<b)

//Check to see if a, b, and c all have the same values
// a === b ===c  this will not work
//a === b && b === c



//Relational Operators - go in between PAIRS of objects
// < less than
// > greater than
// <= less than or equal to
// >== greater than or equal to

//Equality Operators - go in between relational expressions or boolean values
// == equality or "the same as"
// === strict equality
// !== inequality
// ^Exclusive or (XOR)
// ! not (flips the meaning of the object)

//Logical Operators - Always work in pairs.
// && and
// || or

//6 number == "6" string computer will say its true
//6 number === "6" string computer will say its false