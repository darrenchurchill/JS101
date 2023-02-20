/**
 * Darren Churchill
 *
 * JS101 Lesson 3
 * Practice Problems: Easy 1
 *
 * Question 3
 *
 * Determine whether the object of people and their age contains an entry for
 * 'Spot'
 */

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(Object.keys(ages).includes('Spot'));
console.log(ages.hasOwnProperty('Spot'));