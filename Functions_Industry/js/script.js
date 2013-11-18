//Stacy Faude
//Functions - Industry Calculator
//Nov 18, 2013

// Calculation for selling ad banners
// You only need to enter 2 of the 3 fields

var userAlert = alert("Please enter info for 2 of the 3 items: Ad Cost, Ad CPM, & Ad Exposure.");

function adCalc(sell) {
    var ok = 0;
    var cost = prompt("Enter cost of the ad:");
    var cpm = prompt("Enter the CPM:");
    var exposures = prompt("Enter the number of exposures:");

    var complete = "It looks like you entered all the information already!  With this calculator, you just enter two of the fields and it solves for the last one.";

    var incomplete = "Oops!  It doesn't appear you entered enough information.  Please enter at least two entries in order to solve for the other two.";

// solve for exposures
    if (cost != "" && cpm != ""){
        exposures = ((cost / cpm) * 1000); ok++;
    }
    console.log("The number of exposures will be " + exposures);
// solve for cpm
    if (cost != "" && exposures != ""){
        cpm = ((1000 / exposures) * cost); ok++;
    }
    console.log("The cost per thousand impressions is " + cpm);
// solve for cost
    if (cpm != "" && exposures != ""){
        cost = cpm / (1000 / exposures);   ok++;
    }
    console.log("The cost of the ad will be " + cost);

// they did not enter at least 2 fields
    if (!ok) alert(incomplete);
// they filled in all the fields!
    if (cost != "" && cpm != "" && exposures != "") alert(complete);
}

adCalc();