/**
 * Darren Churchill
 *
 * JS101 Lesson 3
 * Practice Problems: Easy 2
 *
 * Question 6
 *
 * Given the nested array, create a new array containing all the values in an
 * un-nested, flattened format.
 *
 */

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let flintstonesFlattened = flintstones.flat();
console.log(flintstonesFlattened);