/**
 * Darren Churchill
 *
 * JS101 Lesson 3
 * Practice Problems: Easy 3
 *
 * Question 1
 *
 * Write three different ways to remove all of the elements from the array.
 *
 */

let numbers = [1, 2, 3, 4];
while (numbers.length > 0) numbers.pop();
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers = [];
console.log(numbers);