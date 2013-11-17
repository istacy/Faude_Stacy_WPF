//Stacy Faude
//11-13-13
//Conditionals - Personal Calculation

//How much free time do I have in one week.

var workMarathon = 40;
var workVirtual = 8;
var homework = 20;
var overtime = 0;

//based on a full 8 hours of sleep every night for 7 days.
var sleep = 56;
//Total hours in a week
var totalHoursInWeek = 168;
//I have 112 hours to get stuff done.

if ((totalHoursInWeek - sleep) - (workMarathon + workVirtual + homework + overtime) >= 64){
    console.log("I have Free time.")
} else {
    console.log("You have A LOT to do this week!")
}
