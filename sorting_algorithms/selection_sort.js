"use strict";

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const array = [45, 23, 65, 65, 80, 3, 234, 5, 78, 10, 99, 2];

/**
 * Simple implementation of Selection sort algorithm.
 * O(n^2) quadratic time complexity and O(1) constant time space complexity
 * @param {*} array
 */
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // Swap numbers
    array[i] = array[min];
    array[min] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);
