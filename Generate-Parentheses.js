/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n, string = "", open = n, close = n) {
  //Our array
  let arr = [];

  //base cases
  if (n === 0) {
    return [""];
  } else if (open < 0 || close < 0 || close < open) {
    // console.log('invalid call,',open, close);
    return arr;
  } else if (open === 0 && close === 0) {
    arr.push(string);
    // console.log('hit,',string);
    return arr;
  }

  // console.log(string)

  //now for the additional calls
  const opening = generateParenthesis(n, string + "(", open - 1, close);
  const closing = generateParenthesis(n, (string += ")"), open, close - 1);

  if (closing.length > 0 || opening.length > 0) {
    // console.log(closing);
    // arr.push(...closing)
    arr = [...closing, ...opening];
    // console.log(arr)
  }

  return arr;
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
/*
Step 1. Understand the problem

We are given 'n' pairs fo parantheses, our goal is to write a function to generate all combinations of well-formed parentheses.

Constraints

1<=n<=8

Step 2. Examples

n=3
((())),(()()), ()()(), (())(), ()(())

n=1
()

Step 3. Method

Valid parentheses
Equal numbers of '(' and ')'
However to put in a closing ')' it cannot go past the number of opening parentheses that are unresolved
(())) is invalid, only two '(' first two "("

n will give hte number of opening and closing parentheses

We will need to store our strings of parentheses within an array

One idea is to have different strings as input parameters
invoke our fuinction with n, but also a string, put in certain numbers as well for how many closing and opening parentheses there are.

The idea is to make it so that once both the numbers are zero we have a string to push into our array at which point we exit out of the recursive loop

other base cases, n=0 just exit first call, though n will not be zero based on constraints, actually just return [""]

If opening our closing is zero exit out.
If our closing parentheses number is less than opening than we did something wrong and exit ouut

Then do recursive call by adding opening parentheses to our string
Then do recursive call for closing parentheses on our string

At the very end we return our array
*/
