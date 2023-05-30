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
      console.log(cur);
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
/*

Step 1. Understand the Problem

We are given an unsorted array of integers and our goal is to return the length of the longest consecutive elements sequence. We must write an algorithm that runs in O(n) time.

Step 2. Examples

[100,4,200,1,3,2]=>4

[1,2,3,4,100,200]

Consecutively, 1,2,3,4

[0,3,7,2,5,8,4,6,0,1]=>9

[0,0,1,2,3,4,5,6,7,8]

0,1,2,3,4,5,6,7,8

Repeated elements throw things off

Step 3. Method

The easiest brute force way would be to sort it. Then loop through the array and see if every following entry is equal to the one before+1.

If it is we can increment a counter stating the length of our sequence. If it isn't we reset the max to either stay the same or be the new sequence depending on which is longer.

O(nlogn)+O(n) time complexity or O(nlogn). The trick is to figure out a linear solution.

patterns

1. Sequence will only be as long as our array at max
2. It doesn't matter what order they're in.

Two pointers, sliding window, stack, queue, recursion, binary search...

Tricky part is how to figure out in this unordered array when you have a consecutive group of elements.

I wonder if using an object to hashmap it out would help. I could instantiate an object with these values

Loop through the object and see if for every value is there a value+1 and a value-1?

[100,4,200,1,3,2]

{100:true, 4,200,1,3,2}

Okay now we see 100, 99 and 101 don't exist
4, 5, doesn't but 3 does.

I guess then you could do a while loop backward or forwards to see how long it goes while updating a counter.

Once we reach the end then we compare it to the max length.

*/
