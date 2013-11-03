// Stacy Faude
// Date: 11-3-13
// Assignment:  Expressions Industry

//Web site design calculator

alert("This will estimate the cost of a new website design");

var pageCost = 100;
var imageDigitalCost = 5;
var imagePhotoCost = 10;
var animationCost = 50;
var scriptCost = 25;

var noPages = prompt("Please enter the number of pages required? \n (Home, About us, Catalog, Contact, etc.");
var imagesDigital = prompt("How many digital images will you supply?");
var imagesPhotos = prompt("How many images will be photographs");

alert("We charge $5 per digital image and \n $10 per photograph");

var animation = prompt("How many animations will you need?");
var scripts = prompt("About how many interactive Graphic Scripts? \n (Image Maps, Rollover Effects, Slide Shows, etc.");

var total = (noPages * pageCost) + (imagesDigital * imageDigitalCost) + (imagesPhotos * imagePhotoCost) + (animation * animationCost) + (scripts * scriptCost);
var total = (noPages * pageCost) + (imagesDigital * imageDigitalCost) + (imagesPhotos * imagePhotoCost) + (animation * animationCost) + (scripts * scriptCost);

console.log(total); //prints price out to console

alert("The estimated total cost of your website would be $" + total);