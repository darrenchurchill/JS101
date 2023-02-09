/**
 * Darren Churchill
 *
 * JS101 Lesson 3
 * Practice Problems: Medium 1
 *
 * Question 2
 *
 * Starting with the string:
 *
 *   let munstersDescription = "The Munsters are creepy and spooky.";
 *
 * Return a new string that swaps the case of all the letters:
 *
 *   `tHE mUNSTERS ARE CREEPY AND SPOOKY.`
 */

let munstersDescription = "The Munsters are creepy and spooky.";

function swapCase(str) {
  return str.split("").map((char) => {
    if (char === char.toLowerCase()) return char.toUpperCase();
    return char.toLowerCase();
  }).join("");
}

console.log(swapCase(munstersDescription));