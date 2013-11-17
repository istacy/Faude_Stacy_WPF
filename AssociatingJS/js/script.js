//Introduction to functions

//sequential - Expressions : runs one line of code at a time in order
//conditional - if statements, ternarie
//reusable - functions
//repetitive

//Functions allow us to have code that is written once, but able to be used again and again by the machine

//DRY - Dont Repeat Yourself

//Functions Store Stuff - Stuff can go in and stuff can come out

//Types of Functions - functions, procedures, anonymous functions

//A basic function

/*function functionName(){
    //code the function runs
}*/

//Parenthesis are for parameters
//functions have names so we can refer to them later.


//Functions - Function
function outputMsg(){
    console.log("Hello world");
}

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

//Function - Function Execution
function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea(); // This executes the function

//Function - Variable Scope
//always prefer to use the vairable within its own function

var width = 5; //scoped outside of function

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    //console.log(area);
}
console.log(width); //this will pull the var from outside the function
calcArea();

//Functions - Arguments and Parameters
//Getting stuff into a function
/*
funcName(arument1, argumet2); //function call

function funcName(parameter1, parameter2){ //function definition
    //code the function runs
}

*/

//Functions - Parameters and Arguments

calcArea(30, 20);

function calcArea(w, h){// w=30, h=20
    var area = w * h;
    console.log(area);
}

//calc dog years

function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.")
}

dogYears(4);
dogYears(5);

//calc dog years another way

function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.")
}

var age1 = 3;
dogYears(age1);

