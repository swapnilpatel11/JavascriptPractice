var marks1 = Array(6);
var marks1 = new Array(20, 40, 60, 80, 85, 90);

var marks1 = [20, 40, 60, 80, 85, 90];
console.log(marks1[2]);
marks1[2] = 100; // update value
console.log(marks1.length); // length of array
console.log(marks1);
marks1.push(200); // add value at the end of array
console.log(marks1);
marks1.pop(); // remove value from the end of array
marks1.unshift(10); // add value at the start of array
console.log(marks1);
marks1.indexOf(80); // find index of value
console.log(marks1.indexOf(80)); // find index of value

// 120 is present in array or not
marks1.includes(120); // return true or false return boolean value
console.log(marks1.includes(120)); // return true or false

marks1.slice(2, 5); // return array from index 2 to 4
console.log(marks1.slice(2, 5)); // return array from index 2 to 4

// printing array using for loop
var sum = 0;
for (let i = 0; i < marks1.length; i++) {
  console.log(marks1[i]);
  sum = sum + marks1[i];
}
console.log(sum);

// reduce filter map
let total = marks1.reduce((sum, mark) => sum + mark);
console.log(total);
//create a new array with even numbers
var scores = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var evenScores = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] % 2 == 0) {
    evenScores.push(scores[i]);
  }
}
console.log(evenScores);

let newFilterEvenScore = scores.filter((score) => score % 2 == 0);
console.log(newFilterEvenScore);

// Map function: get even number array and multiply by 3 each number from that array
let mappedArray = newFilterEvenScore.map((score) => score * 3);
console.log(mappedArray);

var total2 = mappedArray.reduce((sum, val) => sum + val, 0);
console.log(total2);

let score1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let values = score1
  .filter((score) => score % 2 == 0)
  .map((score) => score * 3)
  .reduce((sum, val) => sum + val, 0);
console.log(values);

// Sorting array which have string and sorting an array which have numbers
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

let scores2 = [12, 003, 45, 18, 17, 7];
console.log(scores2.sort());
// 003 is not sorting properly so I have to use custom logic to compare it

scores2.sort((a, b) => a - b);
console.log(scores2);
