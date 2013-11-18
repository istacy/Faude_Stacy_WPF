//Stacy Faude
//Functions Worksheet
//Nov 17, 2013

//Example Calculate the area of a rectangle
console.log("----- Example Problem -----");

calcArea(5, 6);

function calcArea(w, h){
    var area = w * h;
    console.log("The Area of Rectangle is " + area);
}

//Calculate the Circumference of a circle

console.log("----- Circumference of a circle -----");

//circumference of the circle = 2 * radius * PI
var rad = calcCirc(5);

function calcCirc(radius){
    var circ = 2 * radius * 3.1415;
    return circ;
}

console.log("The circumference of the circle is " + rad );

//STUNG!
//It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

//Title
console.log("----- Stung! -----");

//Function Execution
function howManyStings(){ //function name
    var weight = 240;
    var stingsPerLbs = 8.666666667
    var killStings = stingsPerLbs * weight //code the function runs
    console.log("It takes " + killStings + " to kill this animal.");
}
howManyStings();


