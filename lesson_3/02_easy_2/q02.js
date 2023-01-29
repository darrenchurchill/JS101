/**
 * Darren Churchill
 *
 * JS101 Lesson 3
 * Practice Problems: Easy 2
 *
 * Question 2
 *
 * The `Array.prototype.reverse` method reverses the order of elements in an
 * array, and `Array.prototype.sort` can rearrange the elements in a variety of
 * ways, including descending. Both of these methods mutate the original array.
 * Write two distinct ways of reversing the array without mutating the original
 * array.
 *
 * Bonus Question: Can you do it using `Array.prototype.forEach()`?
 */

let numbers = [1, 2, 3, 4, 5];
let reversed = numbers.slice().reverse();
console.log(numbers);
console.log(reversed);

let sorted = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers);
console.log(sorted);

reversed = [];
numbers.forEach((el, idx) => {
  reversed[numbers.length - 1 - idx] = el;
});
console.log(reversed);