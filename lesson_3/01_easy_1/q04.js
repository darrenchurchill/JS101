/**
 * Darren Churchill
 *
 * JS101 Lesson 3
 * Practice Problems: Easy 1
 *
 * Question 4
 *
 * Create a new string that contains all lowercase letters excepts for the first
 * character, which should be capitalized.
 *
 */

let munstersDescription = "the Munsters are CREEPY and Spooky.";

let normalized = munstersDescription[0].toUpperCase()
                 + munstersDescription.slice(1).toLowerCase();

console.log(normalized);