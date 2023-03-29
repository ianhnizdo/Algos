/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return false;

  //fill this with opening "(", "[", and "{"
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    switch (cur) {
      case ")":
        if (arr[arr.length - 1] === "(") {
          arr.pop();
        } else return false;
        break;
      case "]":
        if (arr[arr.length - 1] === "[") {
          arr.pop();
        } else return false;
        break;
      case "}":
        if (arr[arr.length - 1] === "{") {
          arr.pop();
        } else return false;
        break;
      default:
        arr.push(cur);
    }
  }

  return arr.length === 0 ? true : false;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));

/*

Step 1. Understand the Problem

We are given a string 's' containing just the characters '(', ')', '}', "{", "[" and "]"

The goal is to determine if the input string is valid or not
Vaidity determined
1. Open brackets must be closed by the same type of brackets
2. Open Brackets must be closed in the correct order
3. Every close bracket has a corresponding open bracket of the same type.

Step 2. Examples

"()" is valid and output is true

"()[]{}" is valid and the output is true

"(]" is invalid and the output is false

Step 3. Method

We are inputting different opening containers

We will have to loop through our data structure most definitely

The trick is that we can keep adding opening parentheses, brackets, curly braces, but whenever we close
it has to match the last opening brace.


One idea I have is to make an array and push in every opening brace, every time we have a closing brace just
check if it is the same type as the opening just opposite (opening not closing). If it is pop off from the array.

Other wise return false.

If the array is empty and we encounter a closing of any type return false
If the current input is an opening push it into the array
If it is closing and the last entry is not of the same type say "(" for "]" when we should have "[" for "]" return false


If we get to the end of the string and the array is empty return true

*/
