/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const height = [];
  const width = [];

  for (let i = 0; i < heights.length; i++) {
    const cur = heights[i];
    let end = height[height.length - 1];

    if (end !== undefined && cur < end) {
      let j = i - 1;
      console.log(cur, j);
      while (j >= 0 && cur < height[j]) {
        console.log(j);
        const area = end * (i - j);
        // console.log(area, end,i-j);
        height.pop();
        maxArea = Math.max(maxArea, area);
        console.log(area)
        end = height[height.length - 1];
        j--;
      }
    }

    height.push(cur);
    width.push(i);
    // console.log(height,width)
  }
  return maxArea;
};

// console.log(largestRectangleArea([1, 2, 3, 2, 1]));
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
// console.log(largestRectangleArea([1,2,1]))

//brute force, only works if there is no 0 in our array
var largestRectangleArea2 = function (heights) {
  if (!Array.isArray(heights)) return "not an array";
  if (heights.length === 1) {
    return heights[0];
  }
  let max = Math.max(heights[0], heights.length);

  for (let i = 0; i < heights.length - 1; i++) {
    let height = heights[i];
    let width = 1;
    max = Math.max(max, height * width);
    if (height === 0) continue;
    console.log(height);
    for (let j = i + 1; j < heights.length - 1; j++) {
      const cur = heights[j];
      height = Math.min(cur, height);
      width++;
      max = Math.max(max, height * width);
    }
  }

  // console.log(max)
  return max;
};

// console.log(largestRectangleArea2([2, 1, 5, 6, 2, 30]));
// console.log(largestRectangleArea2([0, 1]));
// console.log(largestRectangleArea2([9, 0]));
// console.log(largestRectangleArea2([2, 1, 2]));
/*

Step 1. Understand the Problem

We are given an array of integers with each bar having a width of 1.

Our goal is to return the largest area of the rectangles.

Constraints
1<=heights.length <= 10^5
0<=heights[i] <= 10^4

The trick is we have to figure out how to found the largest height

Step 2. Examples

[2,1,5,6,2,3]
Largest array has an area of 10
5,6, width of each is 1, add them up.
The height is only 1 apart, make them both 5 and do 2*5

[2,4]

2*2=4

Step 3. Method

Okay the idea is to keep pushing areas onto the stack as long as their parameters are okay going forward.

Basically does an entry meet the height requirements to keep adding?

The problem is how do you keep updating?

Keep going as long as its increasing, if you hit an entry that is less than the previous pop, keep popping until you hit the last value that matches.

If you have to pop that is when you can find the area. Last entry times index+1.

At that point compare the computed area to the max that you have recorded.

*/
