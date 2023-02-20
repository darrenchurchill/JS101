/**
 * Darren Churchill
 *
 * JS101 Lesson 3
 * Practice Problems: Easy 2
 *
 * Question 10
 *
 * Write a one-line expression to count the number of lower-case 't' characters
 * in each of the strings below.
 *
 */

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter((char) => char === 't').length);
console.log(statement2.split('').filter((char) => char === 't').length);