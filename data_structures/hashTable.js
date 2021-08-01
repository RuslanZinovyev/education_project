'use strict';

class HashTable {
  constructor(size) {
    this.data = new Array(size);
    console.log(this.data);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  // get all the keys
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        } else {
          keysArray.push(this.data[i][0][0]);
        }
      }
    }
    return keysArray;
  }
  // enf of class
}

// O(n) - linear time
function getRecurringNumber(array) {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (!map.has(array[i])) {
      map.set(array[i], array[i]);
    } else {
      return array[i];
    }
  }
  return undefined;
}

// O(n^2) quadractic time
function firstRecurringCharacter(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] == array[j + 1]) {
        return array[j];
      } else if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
  return undefined;
}
