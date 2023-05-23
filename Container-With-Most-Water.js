/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;

  let beg = 0;
  let end = height.length - 1;

  while (beg < end) {
    const left = height[beg];
    const right = height[end];

    console.log(left, right);

    const area = Math.min(left, right) * (end - beg);

    // console.log(left, right, maxArea);
    // console.log(beg<end,beg,end)

    if (area > maxArea) {
      maxArea = area;
    }
    left < right ? beg++ : end--;
  }

  return maxArea;
};

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([2, 3, 10, 5, 7, 8, 9]));
console.log(maxArea([1, 1]));
