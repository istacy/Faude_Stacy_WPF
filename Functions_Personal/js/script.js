//Stacy Faude
//Functions - Personal Calculator
//Nov 18, 2013

//This script analyzses your BMI

//Calculation: (weight / (height in Inches)^2) * 703
//703 is a conversion factor
//< 18.5 underweight, 18.5-24.9 Normal, 25.0-29.9 overweight, 30+ obese


function calcBmi() {
    var w = prompt("Please enter your weight");
    var heightFeet = prompt("Please enter how many feet your are tall:");
    var heightInches = prompt("Please enter inches");

    heightFeetConvert = heightFeet * 12;
    h = heightFeetConvert + heightInches;

    displaybmi = (w / (h * h) * 703);

        if (displaybmi <18.5)
            console.log("You are Underweight, your BMI is: " + displaybmi);
        if (displaybmi >=18.5 && displaybmi <=24.9)
            console.log("You are Desirable, your BMI is: " + displaybmi);
        if (displaybmi >=25 && displaybmi <=29.9)
            console.log("You are prone to health risks, your BMI is: " + displaybmi);
        if (displaybmi >=30 && displaybmi <=40)
            console.log("You are Obese, you BMI is: " + displaybmi);
        if (displaybmi >40)
            console.log("You are Extremely obese, your BMI is: " + displaybmi);
}

calcBmi();