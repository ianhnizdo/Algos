/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   const numbers = new Map();
//   const check = new Map();
//   const ans = [];

//   const sorted = nums.sort((a, b) => a - b);

//   sorted.forEach((el, i) => {
//     numbers.set(el, i);
//   });
//   console.log(numbers);

//   let left = 0;
//   let right = sorted.length - 1;
//   console.log(sorted);

//   while (left < right) {
//     let sum = -(sorted[left] + sorted[right]);
//     console.log(sum);
//     if (numbers.has(sum) && !check.has([sorted[left], sorted[right], sum])) {
//         const index = numbers.get(sum);
//         console.log(left,right,sum,index)
//       if (index != left && index != right) {
//         ans.push([sorted[left], sorted[right], sum]);
//         check.set(ans[ans.length - 1], ans[ans.length - 1]);
//       }
//       left++;
//     } else if (sum < 0) {
//       right--;
//       continue;
//     } else {
//       left++;
//     }
//   }

//   return ans;
// };

var threeSum = function (nums) {
  const sort = nums.sort((a, b) => a - b);
  const map = new Map();
  const ans = [];

  for (let i = 0; i < sort.length - 1; i++) {
    const cur = sort[i];
    let left = i + 1;
    let right = sort.length - 1;
    while (left < right) {
      let sum = sort[left] + sort[right] + cur;
      const trip = [sort[left], sort[right], cur];
      console.log(trip, map.has(trip.toString()));
      if (sum == 0 && !map.has(trip.toString())) {
        // console.log(map.has(trip.toString()))
        ans.push(trip);
        map.set(trip.toString(), true);
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return ans;
};

// console.log('hi')
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0,1,1]))
// console.log(threeSum([0,0,0]))
/*

Step 1. Understand the Problem

We are given an integer array that contains a list of numbers

Our goal is to return all triplets that equal zero

nums[i]+nums[j]+nums[k]==0
i!=k, j!=k, i!=j
The hnumbers must be unique

We return an array of subarrays for each unique triplets

Step 2. Examples

[-1,0,1,2,-2,-4]
Output: [[-1,-1,2],[-1,0,1]]

The pairs must equal 0.

Step 3. Method

Brute force would be n^3

Three loops,
Start at i, then make another loop for j which is i+1 if we are not at the end of the loop
Then the third loop is j+1, or x

We check if i+j+x =0, if it does push it into our answer array. Otherwise increment x. Once x hits the end increment j. then go back to x. Once j has hit the end of the array we increment i and start it all over.

This is immensely time complex.

There needs to be a way to cut down this time complexity.

Target is always 0.

Sort the input array

Make an object

Start at left and right sides

Take the sum of the pointers. This will give us the remaining number that needs to be found in the array to equal 0.

We could loop through our array before and make a reference to every number present and then just check it within the loop. Key:value, number:index

If the number is in the map and its index is not one of the two pointers we have a triplet.

If not then we must adjust our left or right pointer.

If sum is positive then we are too big, move right pointer down. Vice versa with left.

We might need another map to keep track of our pairs.
*/
