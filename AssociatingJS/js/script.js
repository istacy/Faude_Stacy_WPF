// Expressions - Casting
//Treating strings like numbers and vice versa

var areaCode = 715;
var firstPart = 503;
var secPart = 5088;

var phoneNo = String(areaCode) + String(firstPart) + String(secPart);
console.log(phoneNo);

//displays all numbers without formatting