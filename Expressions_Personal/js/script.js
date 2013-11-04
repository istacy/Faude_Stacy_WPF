// Stacy Faude
// Date: 11-3-13
// Assignment:  Expressions Personal

//What am I calculating?

//This is an alert
alert("This will calculate your weekly gross pay from \n Marathon Cheese and Virtual Vision.");


//Enter in current job information
//Enter in hourly wage and hours worked for Marathon Cheese

//Variable for job1
var job1 = "Marathon Cheese"


var wageJob1 = prompt("Please enter your hourly wage for Marathon Cheese.");
var HoursJob1 = prompt("Please enter the number of hours you worked at Marathon Cheese.");
var overTimeJob1 = prompt("How many hours of overtime did you work?");

overTimeJob1 = wageJob1 * 1.5;

//Enter in projects finished at Virtual Vision
//Pay for Virtual Vision is $250 per project.

var job2 = "Virtual Vision"
var projectsJob2 = prompt("Please enter how many projects you finished this week.");
var wageJob2 = 250;

var grossPay = (wageJob1 * HoursJob1) + overTimeJob1 + (projectsJob2 * wageJob2); //calculates Gross Pay

console.log(grossPay); //prints it out to console

alert("Your gross pay for " + job1 + " and" + job2 + "is:  $" + grossPay);