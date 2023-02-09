/**
 * Darren Churchill
 *
 * JS101 Lesson 3
 * Practice Problems: Medium 1
 *
 * Question 1
 *
 * For this practice problem, write a program that outputs The Flintstones Rock!
 * 10 times, with each line indented 1 space to the right of the line above it.
 */

let output = "The Flintstones Rock!";

for (let i = 0; i < 10; i++) {
  console.log(output);
  output = " " + output;
}