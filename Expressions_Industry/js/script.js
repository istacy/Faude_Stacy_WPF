// Stacy Faude
// Date: 11-3-13
// Assignment:  Expressions Industry

//Web site design calculator

alert("This will estimate the cost of a new website design");

//Set Costs
var pageCost = 100;
var imageDigitalCost = 5;
var imagePhotoCost = 10;
var animationCost = 50;
var scriptCost = 25;

//Number of Pages
var noPages = prompt("Please enter the number of pages required? \n (Home, About us, Catalog, Contact, etc.");
//Number of Digital Images
var imagesDigital = prompt("How many digital images will you supply?");
//Number of Photographs
var imagesPhotos = prompt("How many images will be photographs");

//alert of prices for images
alert("We charge $5 per digital image and \n $10 per photograph");

//Number of Animations
var animation = prompt("How many animations will you need?");
//Number of Scripts
var scripts = prompt("About how many interactive Graphic Scripts? \n (Image Maps, Rollover Effects, Slide Shows, etc.");

//Calculating total cost of the website

var total = (noPages * pageCost) + (imagesDigital * imageDigitalCost) + (imagesPhotos * imagePhotoCost) + (animation * animationCost) + (scripts * scriptCost);
var total = (noPages * pageCost) + (imagesDigital * imageDigitalCost) + (imagesPhotos * imagePhotoCost) + (animation * animationCost) + (scripts * scriptCost);

console.log(total); //prints price out to console

alert("The estimated total cost of your website would be $" + total);