"use strict";

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/**
 * Simple implementation of Quick sort algorithm.
 * O(n log n) time complexity
 * O(log n) space complexity
 * @param {*} array
 */
function quickSort(array, begin, end) {
  if (begin < end) {
    let partitionIndex = partition(array, begin, end);
    quickSort(array, begin, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, end);
  }
}

function partition(arr, begin, end) {
  let pivot = arr[end];

  let i = begin - 1;

  for (let j = begin; j < end; j++) {
    if (arr[j] <= pivot) {
      i++;
      let swap = arr[i];
      arr[i] = arr[j];
      arr[j] = swap;
    }
  }

  let swap = arr[i + 1];
  arr[i + 1] = arr[end];
  arr[end] = swap;

  return i + 1;
}

quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
