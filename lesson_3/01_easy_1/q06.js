/**
 * Darren Churchill
 *
 * JS101 Lesson 3
 * Practice Problems: Easy 1
 *
 * Question 6
 *
 * Add entries for Marilyn and Spot in the `ages` object.
 *
 */

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);
console.log(ages);