// Stacy Faude
// Date: 11-3-13
// Assignment:  Expressions Worksheet


//Average Shopping Bill

//Array with 5 weekly grocery totals
//(120.25, 45.45, 76.54, 51.99, 23.88)

var grocerys = [120.25, 45.45, 76.54, 51.99, 23.88];

var groceryTotal = grocerys[0] + grocerys[1] + grocerys[2] + grocerys[3] + grocerys[4];

var groceryAverage = (grocerys[0] + grocerys[1] + grocerys[2] + grocerys[3] + grocerys[4]) / 5;


console.log("You have spent a total of $" + groceryTotal + " on groceries over 5 weeks. That is an average of $" + groceryAverage + " per week.")