/**
 * Darren Churchill
 *
 * JS101 Lesson 3
 * Practice Problems: Easy 2
 *
 * Question 7
 *
 * Given the object defined below, create an array containing only 2 elements:
 * Barney's name and Barney's number: `[ 'Barney' , 2 ]`.
 *
 */

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let barney = Object.entries(flintstones)
  .filter(([name, _]) => name === 'Barney' )
  .flat();

console.log(barney);