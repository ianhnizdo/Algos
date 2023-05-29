/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const arr = [];

  for (let i = 0; i < tokens.length; i++) {
    const cur = tokens[i];
    const l = arr[arr.length - 2];
    const r = arr[arr.length - 1];

    switch (cur) {
      case "+":
        arr.pop();
        arr.pop();
        arr.push(Number(l) + Number(r));
        break;
      case "-":
        arr.pop();
        arr.pop();
        arr.push(Number(l) - Number(r));
        break;
      case "*":
        arr.pop();
        arr.pop();
        arr.push(Number(l) * Number(r));
        break;
      case "/":
        arr.pop();
        arr.pop();
        if ((l > 0 && r > 0) || (l < 0 && r < 0)) {
          arr.push(Math.floor(Number(l) / Number(r)));
        } else {
          arr.push(-1 * Math.floor(Math.abs(Number(l) / Math.abs(Number(r)))));
        }
        break;
      default:
        arr.push(cur);
        break;
    }
    // console.log(Math.floor(6/132));
  }
  return arr[0];
};

// console.log(evalRPN(["2", "1", "+", "3", "*"]));
// console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
