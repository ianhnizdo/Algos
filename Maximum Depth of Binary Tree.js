/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let num = 0;

  //base case
  if (root === null) return num;

  const left = maxDepth(root.left) + 1;
  const right = maxDepth(root.right) + 1;

  num = left >= right ? left : right;

  return num;
};

var maxDepth2 = function (root, depth = 1) {
  if (root === null) return 0;
  let queue = [[root, depth]];
  let ans = depth;

  while (queue.length > 0) {
    const [cur, height] = queue.shift();
    // console.log(queue);
    ans = Math.max(ans, height);
    if (cur.left !== null) queue.push([cur.left, height + 1]);
    if (cur.right !== null) queue.push([cur.right, height + 1]);
  }
  return ans;
};

/*
Step 1. Understand the Problem
Maximum depth, number of nodes along the longest path from the root node down to the farthest leaf node.

Basically how tall is the tree? We could also keep track of the nodes as well

Step 2. Examples

[3,9,20,null,null,15,7]
3 is the output

[1, null, 2]

Step 3. Method

Binary tree can go left and right, from the root node there are two paths that can be taken. Go left or go right.

What I think will happen is a recursive solution.

We need to keep going down left until its null, then pop back up with a number. Then go right and repeat left -right. Eventually pop back up a number.

We compare which number is greater and return with that to the parent function. We should keep going up until we hit the root and then select the larger number.

Make a variable for our number. Lets say 0. If our value is null we pop back up with 0.

const left = go down the left path +1
const right = then go down the right path+1

update the value of to the greater of left or right and return that.

This should go up to the next nodes left or right value which we'll select the greater of those and pop up.

*/
