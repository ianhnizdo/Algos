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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return;

  const left = root.left;
  const right = root.right;

  invertTree(left);
  invertTree(right);

  root.left = right;
  root.right = left;

  return root;
};

/*
Step 1. Understand the Problem

We are given the root of a binary search tree. Our goal is to invert the tree and return the root.

What does that mean?

Basically we have to swap the left and right sides.

Step 2. Examples

[4,2,7,1,3,6,9]
=> [4,7,2,9,6,3,1]

[2,1,3]
=> [2,3,1]

[]
=>[]

Step 3. Method to solve the problem

This honestly looks like a recursive solution

We start out at the front node

Grab the left and right into variables

Go down the left and then right sides with the function until you hit an undefined or null

Once done pop back up to the parent node and reverse the sides

Then go back into the parents parent and reverse the sides

You keep popping up until you hit the root and then return.

*/
