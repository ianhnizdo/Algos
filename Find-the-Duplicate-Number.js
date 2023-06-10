class Node {
  constructor(val, next) {
    this.val = val !== undefined ? val : 0;
    this.next = next !== undefined ? next : null;
  }
}

function createList(arr) {
  let head;
  let cur;
  for (const el of arr) {
    const node = new Node(el);
    // console.log(node)
    if (head === undefined) {
      head = node;
      cur = node;
    } else {
      cur.next = node;
      cur = cur.next;
    }
  }

  return head;
}

const l1 = createList([1, 3, 4, 2, 2]);
const l2 = createList([3, 1, 3, 4, 2]);

/*
slow pointer: 1->3->2->4
fast pointer: 3->4->4->4

[3,1,3,4,2]
slow pointer: 3->4->2->3
fast pointer: 4->3->2->4->

In both cases if we return the next value after the match 4 is 2, an 2 to 3 it gives us the repeating number
*/

var findDuplicate = function (nums) {
  //Make a slow and fast pointer
  let slow = 0,
    fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow == fast) break;
  }

  let slow2 = 0;
  while (slow2 !== slow) {
    slow2 = nums[slow2];
    slow = nums[slow];
  }
  return slow;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
//
console.log(findDuplicate([3, 1, 4, 1, 2]));
/*
Step 1. Understand the problem

Input: an array of integers nums containing n+1 integers where each number is in the rAnge of [1,n]

So nothing less than -1

There is only one repeated number.

Our goal si to find the extra number


Step 2. Examples

[1,3,4,2,2]-> 2 is the repeated number

Step 3. Method

The easiest method would be to make a map or object to keep track of all the values. Set the key as the integer and value as the number of times it appears.

If it has a value greater than 1 then we have found our answer.

However we are told to solve this with constant memory

What method could we use
Tortoise and hare (no)
Two pointers, what would we point at
Sliding window (intriguing but how)
recursion
binary search
stacks
queues
linkedList

We could also sort the array and just use two poitners to find out if the previous value equalis the current but that does increase memory usage

This is a linkedList problem

*/

// var findDuplicate1 = function(nums) {
//     const map = new Map()

//     for(let i=0; i<nums.length; i++){
//         const cur = nums[i];

//         if(map.has(cur)) {
//             return map.get(cur);
//             }
//           map.set(cur, cur);
//     }
//   }

// var findDuplicate2 = function(nums) {

//     for(let i=0; i<nums.length; i++){
//         const cur = nums[i];
//         for(let j=i+1;j<nums.length; j++){
//             if(nums[j]===cur) return nums[j]
//         }
//     }

// }
