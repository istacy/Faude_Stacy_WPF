// Stacy Faude
// Date: 11-3-13
// Assignment:  Expressions Worksheet


//Discounts
var originalPrice = 49.99;
var discount = 20;
var itemDesc = "video game";
var salesTax = 5.5;


//Price of item with tax

//First find the amount the discount will be
//49.99 * 20% = 9.998
discountAmout = (originalPrice * discount / 100);

//Next Find the Price with the discount
// 49.99 - 9.998 = 39.992
discountPrice = (originalPrice - discountAmout);

//Find the amount the tax will be
//39.992 * 5.5% = 2.19956
taxAmoumt = (discountPrice * salesTax / 100);

//Find the discount price with tax
//39.992 + 2.19956
discountPriceWithTax = discountPrice + taxAmoumt

//Price of item without tax

//First find the amount the discount will be
//49.99 * 20% = 9.998
discountAmout = (originalPrice * discount / 100);

//Next Find the Price with the discount
// 49.99 - 9.998 = 39.992
discountPrice = (originalPrice - discountAmout);


console.log("Your " + itemDesc + " was originally $" + originalPrice + " , but after a " + discount + "% is now $" + discountPrice + " without tax, and $" + discountPriceWithTax + " with tax");