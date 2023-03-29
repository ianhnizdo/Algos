class MinStack{
    constructor(){
        storage = new Map();
    }
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
};

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