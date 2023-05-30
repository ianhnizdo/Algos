/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const cache = new Map();

  //The smallest return should be 1. That would mean the sequence is only one number.
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cache.has(cur)) {
      cache.set(cur, cache.get(cur) + 1);
    } else {
      cache.set(cur, 1);
    }
  }
  cache.forEach((value, key) => {
    if (!cache.has(key - 1)) {
      let counter = 0;
      let cur = key;
      while (cache.has(cur)) {
        counter++;
        cur++;
      }
      max = Math.max(max, counter);
    }
  });

  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

//This one seems to trade time complexity in exchange for space complexity in the tests compared to the one above.
var longestConsecutive2 = function (nums) {
  if (nums.length === 0) return 0;
  const cache = new Set();

  //The smallest return should be 1. That would mean the sequence is only one number.
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    cache.add(cur);
  }

  cache.forEach((value, key) => {
    if (!cache.has(key - 1)) {
      let counter = 0;
      let cur = key;
      while (cache.has(cur)) {
        counter++;
        cur++;
      }
      max = Math.max(max, counter);
    }
  });

  return max;
};

console.log(longestConsecutive2([1, 2, 3, 4, 5, 7, 8]));
