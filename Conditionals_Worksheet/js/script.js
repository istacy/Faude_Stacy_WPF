// Stacy Faude
// Date: 11-10-13
// Conditionals Worksheet

//Do you weigh enough
//You must be 250 or more to enter the heavyweight division of the Strawberry Festivals pie eating contest

/*var weight = 140;

if(weight >= 250){
    //if great than or equal to you qualify
    console.log("The competitor qualifies for the heavyweight division!");
}else{
    console.log("The competitor needs to gain some wieght")
}*/


//Group 1
//Celsius to Fahrenheit Converter
//Celsius = ((F-32)/1.8000)

/*var degree = 100;
var unit = prompt("Please enter a f for Fahrenheit or a c for Celsius");

var calcCelsius = ((degree - 32) / 1.8000);

if (unit = f){
    console.log("The temperature is " + degree + "degrees");
}else{
    console.log("The temperature is " + calcCelsius + " degrees");
}
*/


/*console.log("The temperature is "+ calcCelsius + " Celsius. or The temperature is " + degree + " Fahrenheit.");*/


//Group 2
//Grade Letter Calculator
//Full Sails Graduate Grade Scale

//Given: grade - in percent
var grade = 95;



if(grade < 69) {
    finalGrade = (grade + " (F)");
}
if(grade >= 70 && grade < 72) {
    finalGrade = (grade + " (D");
}
if(grade >= 73 && grade < 79 ){
    finalGrade = (grade + " (C)");
}
if(grade >= 80 && grade < 84){
    finalGrade = (grade + " (B)");
}
if(grade >= 85 && grade < 89){
    finalGrade = (grade + " (B+)");
}
if(grade >= 90 && grade < 94){
    finalGrade = (grade + " (A)");
}
if(grade >= 95){
    finalGrade = (grade + " (A+)");
}

console.log("You have a " + grade + " %, which means you have earned a(n)" + finalGrade + " in the class!");