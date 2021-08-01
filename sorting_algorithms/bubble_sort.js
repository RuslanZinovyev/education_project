"use strict";

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const array = [45, 23, 65, 65, 80, 3, 234, 5, 78, 10, 99, 2];

/*
44 - 6 - 2 - 1 - 5 - 63 - 87 - 99 - 4 - 0 - 283   1 iteration
4 - 2 - 1 - 5 - 44 - 63 - 87 - 4 - 0 - 99 - 283   2 iteration
2 - 1 - 4 - 5 - 44 - 63 - 4 - 0 - 87 - 99 - 283   3 iteration
1 - 2 - 4 - 5 - 44 - 4 - 0 - 63 - 87 - 99 - 283   4 iteration
1 - 2 - 4 - 5 - 4 - 0 - 44 - 63 - 87 - 99 - 283   5 iteration
1 - 2 - 4 - 4 - 0 - 5 - 44 - 63 - 87 - 99 - 283   6 iteration
1 - 2 - 4 - 0 - 4 - 5 - 44 - 63 - 87 - 99 - 283   7 iteration
1 - 2 - 0 - 4 - 4 - 5 - 44 - 63 - 87 - 99 - 283   8 iteration
1 - 0 - 2 - 4 - 4 - 5 - 44 - 63 - 87 - 99 - 283   9 iteration
0 - 1 - 2 - 4 - 4 - 5 - 44 - 63 - 87 - 99 - 283  10 iteration
*/

/**
 * Simple implementation of Bubble sort algorithm.
 * O(n^2) quadratic time complexity and O(1) constant time space complexity
 * @param {*} array
 */
function bubbleSort(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        // Swap numbers
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
