"use strict";

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const array = [45, 23, 65, 65, 0, 13, 80, 3, 234, 5, 78, 10, 99, 2];

/*
44 - 99 - 6 - 2 - 1 - 5 - 63 - 87 - 283 - 4 - 0   1 iteration
6 - 44 - 99 - 2 - 1 - 5 - 63 - 87 - 283 - 4 - 0   2 iteration
2 - 6 - 44 - 99 - 1 - 5 - 63 - 87 - 283 - 4 - 0   3 iteration
1 - 2 - 6 - 44 - 99 - 5 - 63 - 87 - 283 - 4 - 0   4 iteration
1 - 2 - 5 - 6 - 44 - 99 - 63 - 87 - 283 - 4 - 0   5 iteration
1 - 2 - 5 - 6 - 44 - 63 - 99 - 87 - 283 - 4 - 0   6 iteration
1 - 2 - 5 - 6 - 44 - 63 - 87 - 99 - 283 - 4 - 0   7 iteration
1 - 2 - 4 - 5 - 6 - 44 - 63 - 87 - 99 - 283 - 0   8 iteration
0 - 1 - 2 - 4 - 5 - 6 - 44 - 63 - 87 - 99 - 283   9 iteration
*/

/**
 * Simple implementation of Insertion sort algorithm.
 * O(n^2) quadratic time complexity and O(1) constant time space complexity
 * @param {*} array
 */
function insertionSort(array) {
  let x, key;
  for (let i = 0; i < array.length - 1; i++) {
    x = i;
    key = array[x + 1];
    while (array[x] > key && x >= 0) {
      array[x + 1] = array[x];
      x--;
    }
    array[x + 1] = key;
  }
}

insertionSort(numbers);
console.log(numbers);
