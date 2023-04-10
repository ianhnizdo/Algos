/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const ans = [];
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    let cur = temperatures[i];
    if (stack.length === 0) {
      stack.push([cur, i]);
      // ans.push(0);
      // console.log('hello')
      continue;
    }
    // console.log(stack,cur,i,ans);
    while (stack.length > 0 && cur > stack[stack.length - 1][0]) {
      const index = stack[stack.length - 1][1];
      const val = stack[stack.length - 1][0];
      ans.push(i - index);
      stack.pop();
    }
    stack.push([cur, i]);
    // ans.push(0);
    // console.log(stack)
  }

  while (stack.length > 0) {
    ans.push(0);
    stack.pop();
  }

  return ans;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

/*

Step 1. Understand the Problem

Input, an array of integers with temperatures that represents the daily temperatures. We need to return an array of answers such that answer[i] is the number of days you have to wait aftter the ith day to get a warmer temperature. If there is no future day for which it is possible keep answer[i]==0 instead.

Basically you need to look forward and spot when you'll have a warmer temperature, aka a higher number than your present one.

We have to return an array that corresponds to the number of days you have to wait to get a higher temperature.

Step 2. Examples

[73,74,75,71,69,72,76,73]->[1,1,4,2,1,1,0,0]

[30,60,90]->[1,1,0]

[30,40,50,60]->[1,1,1,0]

Step 3. Methods

Brute force I would have just loop through the array and for every entry make another loop after. I'd have a counter and update it until I hit a larger number. It would start at 1 and go till the end of the loop. If we don't find a larger number then just make the number 0 and push it into the new array. Then exit out of the smaller array and go to the original and move onto the next entry in the array.

This would be O(n^2)

Two pointers, sliding window, queue, heap, binary search, stack.

What if we started at the end
Push in 0 originally for the last entry since it must alwways be zero when there's nothing after. Then what we could do is make a Max variable. Going backward we can update the max variable as we find bigger ones. Then the smaller entries indexes we can find teh difference of max index-smaller entry index and push in that number.

Problem is that it just makes it the difference to the max entry index.

Perhaps we could use a map to help. That  would add considerable space complexity adn I'm not sure how we could access it without more time complexity.

What if we make a new array showcasing the max values as we progress through the original array. We would have an array of only the max values based on what index we are at. We could even add in the index of our max values which would give us the space to the max again...

What about making a new array and putting in our entry. Then look at the next in our original array. If its larger than our stack entry pop off that stack entry and push in the difference of larger entry index-smaller entry index into our output array. However what if its smaller. What if we keep adding to our stack the smaller entries until we hit a larger


[73,74,75,71,69,72,76,73]
output: []
check stack: []

[73],[]
[74],[1-0]
[75],[1-0,2-0]
*/
