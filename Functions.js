/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

function title(titleString) {
    console.log(`\n----------${titleString}:----------\n`);
}

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */

title("Exercise 1");

function area(l1, l2) {
    return (l1 + l2) * 2;
}

let area1 = area(12, 15);
let area2 = area(30, 25);
console.log("Area of area1:", area1);
console.log("Area of area2:", area2);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */

title("Exercise 2");

function crazySum(int1, int2) {
    if (int1 === int2) {
        return (int1 + int2) * 3
    } else {
        return int1 + int2
    }
}

let value1 = crazySum(10, 10);
let value2 = crazySum(10, 11);
console.log("Crazy Sum1:", value1);
console.log("Crazy Sum2:", value2);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

title("Exercise 3");

function crazyDiff(diff) {
    if (diff > 19) {
        return Math.abs(diff - 19) * 3
    } else {
        return Math.abs(19 - diff)
    }
}

let diffExmp1 = crazyDiff(-9);
let diffExmp2 = crazyDiff(30);
console.log("Crazy Difference1:", diffExmp1);
console.log("Crazy Difference2:", diffExmp2);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

title("Exercise 4");

function boundary(inte4) {
    if (inte4 === 400 || inte4 >= 20 && inte4 <= 100) {
        return true
    } else {
        return false
    }
}

let boundary1 = boundary(20);
let boundary2 = boundary(400);
console.log("Boundary:", boundary1);
console.log("Boundary:", boundary2);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

title("Exercise 5");

function strivify(string5) {
    if (string5.startsWith("Strive")) {
        return string5
    } else {
        return `Strive ${string5}`
    }
}

let strive1 = strivify("Strive");
let strive2 = strivify("Trollo");
console.log("strive1:", strive1);
console.log("strive2:", strive2);

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

title("Exercise 6");

function check3and7(positive) {
    if (positive % 3 === 0 && positive % 7 === 0) {
        console.log("This is number is multiple of 3 and 7:", positive)
    } else if (positive % 3 === 0) {
        console.log("This is number is multiple of 3:", positive)
    } else if (positive % 7 === 0) {
        console.log("This is number is multiple of 7", positive)
    } else {
        console.log("This is number is NOT multiple of 3 or 7", positive)
    }
}

let positive1 = check3and7(21);
let positive2 = check3and7(2);
let positive3 = check3and7(30);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

title("Exercise 7");

function reverseString(reverse) {
    let split7 = reverse.split('');
    let reverse7 = split7.reverse();
    let concat7 = reverse7.join('');
    return concat7
}

let reverse = reverseString("Strive");
console.log("Let's reverse:", reverse);

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

title("Exercise 8");

function upperFirst(string) {
    let separateWord = string.toLowerCase().split(' ');
    for (let index = 0; index < separateWord.length; index++) {
        separateWord[index] = separateWord[index].charAt(0).toUpperCase() +
            separateWord[index].substring(1);
    }
    return separateWord.join(' ');
}

let exc8 = upperFirst("lets see if it works");
console.log("Everything to capital letter:", exc8);

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

title("Exercise 9");

function cutString(string9) {
    pop9 = string9.slice(1, -1);
    return pop9;
}

let exc9 = cutString("String");
console.log("Slice first and last character", exc9);

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

title("Exercise 10");


/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
