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

var findDuplicate3 = function (nums) {
  let slow = 0,
    fast = 0;
  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];
    // console.log(slow, fast);
    if (slow == fast) break;
  }
  console.log(slow);
  let slow2 = 0;
  while (slow !== slow2) {
    slow = nums[slow];
    slow2 = nums[slow2];
  }
  return slow2;
};

console.log(findDuplicate3([1, 3, 4, 2, 2]));
//slow 1-3->2->4->2->4->2
//fast 3->4->4->4

//slow  4->2->4->2
//slow2 0->1->3->2
//Okay we have now found 4
//
console.log(findDuplicate3([3, 1, 4, 1, 2]));
/*
slow 0->3->1->1->
fast 0->1->1->1

slow2 0->3->1
slow 1->1->1

*/

var findDuplicate1 = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];

    if (map.has(cur)) {
      return map.get(cur);
    }
    map.set(cur, cur);
  }
};

var findDuplicate2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === cur) return nums[j];
    }
  }
};
