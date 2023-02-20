/**
 * Darren Churchill
 *
 * JS101 Lesson 3
 * Practice Problems: Easy 2
 *
 * Question 9
 *
 * How can you center the string below above a 40-character wide table?
 *
 */

let title = "Flintstone Family Members";
const WIDTH = 40;

console.log(title.padStart(((WIDTH - title.length) / 2) + title.length));
