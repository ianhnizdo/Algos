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

const dailyTemperatures2 = function (temperatures) {
  const ans = new Array(temperatures.length).fill(0);
  // console.log(ans);

  for (let i = 0; i < temperatures.length; i++) {
    let cur = temperatures[i];
    let prev = temperatures[i - 1];
    // console.log(cur>prev);
    if (cur > prev) {
      // console.log(cur, prev);
      let j = i - 1;
      // console.log(j);
      while (j >= 0) {
        // console.log(cur, temperatures[j]);
        const back = ans[j];
        if (cur <= back) break;
        // console.log(cur, temperatures[i])
        if (back === 0 && temperatures[i] > temperatures[j]) {
          ans[j] = i - j;
          // console.log(temperatures[j], ans[j], temperatures[i], cur>back);
        }
        j--;
      }
    }
  }

  return ans;
};

console.log(dailyTemperatures2([73, 74, 75, 71, 69, 72, 76, 73]));
/*

Step 1. Understand the Problem

You are given an array of integers temperatures that represents the daily temperatures. Our goal is to return an array answer that tells us how long we have to wait until we reach a warmer temperature.

Step 2. Examples

[73,74,75,71,69,72,76,73]
output is [1,1,4,2,1,1,0,0]

Step 3. Method

Brute force

Loop through array and for every integer being looping from its spot forward until you find a number larger than itelf.
Time Complexity O(n^2)

Not good

Alternate approach

1. Two pointers
2. Sliding window
3. Stacks
4. Queues
5. Linked List
6. Binary Search


We will probably need to create an array

Basically loop forward until you find a number that is greater than the previous

At that point loop backward subtracting your current number minus the previous until you either hit a value in our array that already has found a larger number, hit the beginning of ouor answer array, or find a value that has already found a larger number closer than the one we are currently examining.

*/
