/**
 * Darren Churchill
 *
 * JS101 Lesson 3
 * Practice Problems: Easy 1
 *
 * Question 10
 *
 * Return a new version of the sentence, ending just before the word 'house'.
 *
 */

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.slice(0, advice.indexOf('house')));