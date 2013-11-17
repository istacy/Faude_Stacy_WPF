//While Loop

console.log('------ Loops -------');

// sets up the index
var b = 10;

// checks the condition
while (b > 0){
    console.log(b + 'kegs on the wall');
    b--; // increments or decrements the index
}




console.log('----- Do While Loops ------');


var c = 10;

do{
    console.log(c + ' kegs on the wall');
    c--;
}
while(c > 0);




console.log('----- For Loop -----');

for (var i = 10; i > 0; i--){
    console.log(i + ' kegs on the wall')
}



console.log('----- infinate loop NEVER ENDS-----');

var a = 1;

while ( a < 10 ) {
    console.log(a);
}

console.log('----- infinate loop -----');

var a = 1;

while (a < 10 ){
    console.log(a);
    a++;
}

console.log('-----Do... While Loop-----');

var a = 1;

do{
    console.log(a);
    a++;
} while (a < 10);


//will always happen at least once.

console.log('-----For Loop -----');

//set up the inex
var i = 1;
//check the condition
while( i < 10){
    //do stuff
    //do stuff
    //do stuff
    i++; // increment the index
}

console.log('-----Short hand For Loop -----');
//setup index  // check condition  // increment index
for ( var i = 1 ; i < 10 ; i++){
    //do stuff
    //do stuff
    //do stuff
}

console.log('-----Break -----');

for ( var i = 1 ; i < 5000 ; i++){
    //do stuff
    //do stuff
    if (i== 101) {
        break;
    }
    //do stuff
}

// break jumps out of the loop

console.log('-----Break -----');

for ( var i = 1 ; i < 5000 ; i++){
    //do stuff
    //do stuff
    if (i % 5 == 0) {
        continue; //done with this iteration
    }
    //do second set of stuff
    //do second set of stuff
}