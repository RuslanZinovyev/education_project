"use strict";

/*
 Write two functions that find the factorial of any number. One should use recursive, the other should just use a for loop.  
*/

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }

  if (number !== 0) {
    return number * findFactorialRecursive(number - 1);
  }
}

function findFactorialIterative(number) {
  let answer = 1;

  if (number == 0) {
    return 1;
  }

  for (let i = number; i > 0; i--) {
    answer *= number;
    number--;
  }

  return answer;
}

/*
  Given a number N, return the index value of the Fibonacci sequence, where the seqence is:
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377 ...
  the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N = 5 -> 2 + 3
*/

function fibonacciIterative(n) {
  //O^n
  const arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

function fibonacciRecursive(n) {
  // O(2^N) exponential time
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

console.log(fibonacciIterative(10));
