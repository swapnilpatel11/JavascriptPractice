// if..else loop
const flag = true;

if(flag){
    console.log("Inside if");
}
else{ // more conditions then else if
    console.log("Inside else");
}

// while loop
let i =0;
while (i < 5){
    i++;
    console.log("while loop");
}

let required = true;
while(required){
    console.log("while loop");
    required = false;
}

//do while loop
// loop runs atleast once then check conditions
do 
{
    i++;
    console.log("do while loop");
    
}while(i < 5);
console.log("do while loop" + [i]);

// for loop

for(let j = 0; j < 5; j++){
    console.log("for loop");
}

// while vs. for loop : when we know how many times we want to run the loop then we use for loop, when we want to satisfied condition then we use while loop
// from 1 to 10 find the numbers which are common multiple of 2 and 5

for(let k = 1; k <= 10; k++){
    if(k % 2 == 0 && k % 5 == 0){
        console.log(k);
    }
}

// from 1 to 10 find the numbers which are common multiple of 2 or 5

for(let k = 1; k <= 10; k++){
    if(k % 2 == 0 || k % 5 == 0){
        console.log(k);
    }
}

