/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const cur = strs[i];
    console.log(cur);
    const sort = cur.split("").sort().join("");
    console.log(sort);
    if (map.has(sort)) {
      const value = map.get(sort);
      value.push(cur);
    } else {
      map.set(sort, [cur]);
    }
  }
  console.log(Array.from(map.entries()));
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

var groupAnagrams2 = function (strs) {
  const map = new Map();

  for (const el of strs) {
    const anagram = destructure(el).join(",");
    // console.log(anagram)
    console.log(map.has(anagram));
    if (map.has(anagram)) {
      console.log(true);
      const val = map.get(anagram);
      val.push(el);
    } else {
      map.set(anagram, [el]);
    }
  }

  return Array.from(map.values());
};

function destructure(string) {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < string.length; i++) {
    const index = string.charCodeAt(i) - "a".charCodeAt(0);
    arr[index] += 1;
    // console.log(string.charAt(i), string.charCodeAt(i)-'a'.charCodeAt('a'))
  }
  return arr;
}

console.log(destructure("ate"));
// console.log("b".charCodeAt(0));
console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));

/*

Step 1. Understand the Problem

Anagram, word or phrase formed by rearranging the letters of a differetn word or phrase, typicallly using all the original letters exacctly once

Bascially we need to find the words that are teh same anagram together

We have an input of strings

Our output should be an array of subarrays

Every subarray should ocntain strings of the same anagram

Step 2. Examples

["eat", "tea", "tan", "ate", "nat", "bat"]

Output
[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

Step 3. Method

Brute force method

I would loop through the strings and sort each one
This would be done in a copy array

I would probably make an object with the keys being a given string sorted and the value being an array of all the anagrams

I would essentially loop through the array, sort every entry and see if its in the object, if it is not we initalize the key and set the value to be an array with the current entry of our input array.
If the sorted string is in the object we just push the current entry into the values.

At the end we just return the object.values

This method takes n time to go through the array and then nlogn for sorting. Space complexity should be n since we are creating an object for all the entries in the array

Not time efficient, m*nlog(n)

Better way is needed

What abougt

Step 4. Solve

*/
