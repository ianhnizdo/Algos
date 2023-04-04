class MinStack {
  constructor() {
    this.storage = new Map();
    this.length = 0;
    this.minArr = [];
  }
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (!typeof val === Number) return;
  this.storage.set(this.length, val);
  this.length++;
  console.log(this.storage);

  const arr = this.minArr;
  //now check if our val is smaller than the end of the array
  if (arr.length === 0) {
    arr.push(val);
    console.log(arr);
    return;
  }
  console.log(arr);
  //We only want to push into the minarr when we have a value smaller than what's present at the end.
  return arr[arr.length - 1] >= val ? arr.push(val) : arr;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  //base case
  // console.log("pop");
  const arr = this.minArr;
  if (this.length === 0) return "empty map";

  const grab = this.storage.get(this.length-1);
  this.storage.delete(this.length - 1);
  this.length--;

  // console.log(grab, 'grab');

  if (grab === arr[arr.length - 1]) {
    // console.log(this.storage.get(1), 'arrcheck')
    arr.pop();
  }
  return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const first = this.storage.get(this.length - 1);
  console.log(first);
  if (first === undefined) return "empty stack";
  console.log("test");
  return first;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  //That should be the smallest value
  const smallest = this.minArr[this.minArr.length-1];
  return smallest;
};

// const test = new MinStack();
// test.push(-2);
// test.push(0);
// test.push(-3);
// console.log(test);
// test.getMin();
// console.log(test.getMin());
// test.pop();
// console.log(test);
// test.top();
// console.log(test.top());
// test.getMin();
// console.log(test.getMin());

const check = new MinStack();
check.push(-2);
check.push(0);
check.push(-1);
console.log(check);

console.log(check.getMin())
console.log(check.top());
check.pop();
console.log(check);

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/*

Step 1. Understand the Problem

We are designing a class data structure that supports push, pop, top, and retrieving teh minimum element
in constant time

MinStack() initializes the stack

push() pushes the element val onto the stack

pop() removes the element on the top of the stack

top() gets the top elementt from the stack

getMin() retrieves teh minimum element in the stack

Our solution must have O(1) time complexity

Step 2. Examples

MinStack(), push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()
null, null, null, null, -3, null, 0, -2

Step 3. Method

So pushing is simple enough, we can use a map to assist us with saving the data.
Use a lenght property to keep track of everything
Pop, reduce the length
Top will always be the 0th value of our stack/map

getMin is the trickiest. The easiest thing I can come up with is to make an array
organized on the basis of what is the biggest and smallest

Brute force I'd go through our map and find the smallest value

More properly I would make some array organized from largest to smallest data value
0,-1,-2
0 initial, smallest so push in, -1 is smaller so push in, -2 is smaller so push in

0,1,-2
0 initial so push in, 1 is bigger though so it doesn't get pushed in. No need to push in larger values since the one before will
not get popped before the larger value.

*/
