/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const arr = new Array(nums.length + 1);
  for (let j = 0; j < arr.length; j++) {
    arr[j] = [];
  }
  // console.log(arr)
  for (let i = 0; i < nums.length; i++) {
    // console.log("hi");
    const cur = nums[i];
    if (map.has(cur)) {
      const entry = map.get(cur);
      map.set(cur, entry + 1);
    } else {
      map.set(cur, 1);
      //   arr.push(cur);
    }
  }
  const entry = map.entries();
  for (const [key, value] of entry) {
    console.log(key, value);
    arr[value].push(key);
  }
  //   console.log(arr)

  let ans = [];
  console.log(arr.length);
  for (let z = arr.length - 1; z > 0; z--) {
    if (ans.length === k) break;
    // console.log(z)
    const cur2 = arr[z];
    // console.log(cur2)
    if (cur2.length === 0) continue;
    ans.push(...cur2);
  }
  console.log(ans);
};

console.log(topKFrequent([1, 3, 2, 1, 3, 3, 2, 2, 3], 2));

/*

Step 1. Understand the Problem

We are given an array nums and an integer k. Our goal is to return the k most frequent elements. We can return this answer in any order.

Step 2. Examples

[1,1,1,2,2,3], k=2
Output: [1,2]

Step 3. Method to solve

The whole idea is to keep track of the elements and which is most frequent.

Brute force would be to make a map and have the keys be numbers and the values be the count.

We would increase teh count every time we encounter another replica in the  array otherwise we would iniitiate it at zero.

Loop over array, update teh map.

Grab all the map key value pairs and sort them by the values.

Then we would essentially have to slice from the beginning to k to find the k most frequent values.

n for nums loop
mlogm for sorting the map
1 to m for finding the msot frequent keys in the sorted map


Not nice

Is our array sorted already?

What if we made an array that can only be k long

As we iterate through our array we'll update our map

We can push every unique number into the k array until it exceeds k
Every time we push a new value into the k array

*/
