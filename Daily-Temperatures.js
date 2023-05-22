/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let ans = new Array(temperatures.length).fill(0);

  //we will push to this
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    const cur = temperatures[i];
    const length = stack.length - 1;

    //check if stack is empty
    if (stack.length === 0 || cur <= stack[length][0]) {
      stack.push([cur, i]);
      // console.log(cur, stack);
    } else if (cur > stack[length][0]) {
      //j will be the number of places  to the next largest number
      // console.log(cur)
      let j = 1;
      let end = stack[stack.length - 1];
      while (stack.length > 0 && cur > end[0]) {
        ans[end[1]] = i - end[1];
        // console.log(cur,end);
        stack.pop();
        end = stack[stack.length - 1];
        j++;
      }
      stack.push([cur, i]);
    }
  }

  return ans;
};

// console.log(dailyTemperatures([73, 74-, 75, 71, 69, 72, 76, 73]));
// [1,1,4,2,1,1,0,0]
// console.log(dailyTemperatures([30, 40, 50, 60]));
// console.log(dailyTemperatures([30, 60, 90]));
console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]));

/*

Step 1. Understand the Problem

We are given an array of integers.

Our goal is to find out for each integer how many spots must we got to the right until we find a larger integer.

Then put that number into an answer array.
If there are no larger numbers put 0 into the answer array.

We cannot change the order of our array

Step 2. Examples

[73,74,75,71,69,72,76,73]->[1,1,4,2,1,1,0,0]

Step 3. Method

Brute force

Loop through the array and for every entry make another loop to find out when we find a larger number. The time complexity at worst would be O(n^2)

We would of course have an answer array where we would push the number of spots until we hit a larger number from our current index in the array or 0 if there are no larger numbers.

What is a better way to do this?

1. Two pointers
2. Sliding window
3. Recursion
4. Heaps
5. Hashmap
6. Stack

Why would a stack be useful here? Stacks are great for linearly moving through the array. Stacks are useful if your trying to keep up the information as your moving through.



*/
