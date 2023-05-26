/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let max = 0;
  let counter = 0;

  let left = 0;
  let right = 0;

  while (right < s.length) {
    const r = s[right];

    map.has(r) ? map.set(r, map.get(r) + 1) : map.set(r, 1);
    right += 1;
    counter += 1;

    if (map.get(r) > 1) {
      while (map.get(r) > 1) {
        console.log(map.get(s[left]));
        map.set(s[left], map.get(s[left]) - 1);
        left += 1;
        counter -= 1;
      }
    }

    max = Math.max(max, counter);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abca"));

console.log(lengthOfLongestSubstring("abcabcbb"));

/*

Step 1. Understand the Problem

We are given a string, our goal is to find the longest substring without repeating characters.

Output is just the number of characters that don't repeat

Step 2. Examples

"abcabcbb", 3

"bbbbb" 1
"pwwkew", 3

Step 3. Method

Probably make an object and use two pointers

Make a max
Make a counter

Now make a left and a right pointer

while right is less than the end

For every entry create/update the object and add to the counter
Check if the counter is greater than the max every time.

If we hit an entry that exists and is greater than 0 in our object we move the left pointer up until that entry is 0 even if that means left equals right.
decrement the counter

If the left equals right than move up right.

Exit loop

Return the max
*/
