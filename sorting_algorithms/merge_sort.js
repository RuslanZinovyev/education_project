"use strict";

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/**
 * Simple implementation of Merge sort algorithm.
 * O(n log n) time complexity
 * O(n) space complexity
 * @param {*} array
 */
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  // Split Array in into right and left
  let mid = array.length / 2;
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // build temp array
  const result = [];
  let x = 0;
  let y = 0;

  while (x < left.length && y < right.length) {
    if (left[x] > right[y]) {
      result.push(right[y++]);
    } else {
      result.push(left[x++]);
    }
  }

  while (x < left.length) {
    result.push(left[x++]);
  }

  while (y < right.length) {
    result.push(right[y++]);
  }

  return result;
}

console.log(mergeSort(numbers));
