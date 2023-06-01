/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

class Node {
  constructor(val, next) {
    this.val = val === undefined ? null : next;
    this.next = next === undefined ? null : next;
  }
}

var reorderList4 = function (head) {
  const arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  let left = 1;
  let right = arr.length - 1;
  let node = head;
  let i = 0;
  while (left < right) {
    if (i % 2 === 0) {
      node.next = new Node(arr[right]);
      right--;
    } else {
      node.next = new Node(arr[left]);
      left++;
    }
    node = node.next;
    i += 1;
  }
  if (left === right) {
    node.next = new Node(arr[right]);
  }
};

function doublyLinked(list) {}

/*

Step 1. Understand the problem

We have to reorganize the linked list to make the last node be the second, second to last be the fourth, etc

Even and odd will

Step 2. Examples

[1,2,3,4] => [1,4,2,3]
[1,2,3,4,5] => [1,5,2,4,3]

[1,2,3,4,5,6]=>[1,6,2,5,3,4]

Step 3. Method

This looks like two pointers almost that would work marvelously but I think its a singly linked list.

My initial though is moving a pointer through the linked list to the end and then start at the beginning. The idea would be to move the left and right pointer and update the next values accordingly. During this time I would define a this.prev to make a doubly linked list.

so prev would be null
then after setting prev in the node update the node to the current value.
Move up the current value

Now start with the start and end
Make a current variable
Storage for next values that need to be saved
Make a condition set to true initially

do a while loop whose condition is based on whether or not the node value exists in an object we can check against. There is probably a better way.

Basically if we're at the beginning I make the condition true, these are values from the left that have their next value be nodes at the end

Condition true
Move up start to get the next node
set cur.next = end
Move down the end
cur.next.prev = cur
cur=cur.next
set condition false


condition false, we are on the right side node and make the next left
cur.next = start
Make the next value in cur have its prev updated, cur.next.prev=cur

set condition true

*/

var reorderList = function (head) {
  const arr = [];

  //lets make an array
  let node = head;
  let i = 0;

  while (node) {
    arr.push(node);
    node = node.next;
    arr[i].next = null;
    i += 1;
  }
  console.log(arr);

  let l1 = 1;
  let l2 = arr.length - 1;
  //   let dummy = head;

  while (l1 < l2) {
    //     console.log(head);
    head.next = arr[l2];
    // console.log(head)
    l2 -= 1;
    head = head.next;
    head.next = arr[l1];
    l1 += 1;
    head = head.next;
  }

  if (l1 === l2) {
    // console.log('l1 is equal to l2');
    // console.log(head.next, arr[l1]);
    head.next = arr[l1];
    console.log(arr[0]);
  }

  // console.log('jead and l1,', arr[0], l1);

  return;
};

var reorderList2 = function (head) {
  let s = head;
  let f = head.next;
  while (f !== null && f.next !== null) {
    s = head.next;
    f = head.next.next;
  }

  //Now s is at the beginning at the second half of the list
  let second = s.next;
  //Splitting it into two different linked lists
  s.next = null;

  let prev = null;

  while (second !== null) {
    let copy = second.next;
    second.next = prev;
    prev = second;
    second = copy;
  }

  // Nowwe merge the two lists.
  let first = head;
  let second2 = prev;

  let bool = false;
  let tmp = first.next;
  // We use the now modified second
  while (tmp !== null && second2 !== null) {
    if (!bool) {
      first.next = second2;
      second2 = second2.next;
      first = first.next;
      bool = true;
    } else if (bool) {
      first.next = tmp;
      tmp = tmp.next;
      first = first.next;
      bool = false;
    }
  }

  if (tmp !== null) {
    first.next = tmp;
  }
  return;
};

var reorderList3 = function (head) {
  let s = head;
  let f = head.next;
  while (f !== null && f.next !== null) {
    s = s.next;
    f = f.next.next;
    // console.log('firstloop', f.next===null)
  }

  //Now s is at the beginning at the second half of the list
  let second = s.next;

  //Splitting it into two different linked lists
  s.next = null;

  let prev = null;

  while (second !== null) {
    // console.log('test');
    let copy = second.next;
    second.next = prev;
    prev = second;
    second = copy;
  }

  // Nowwe merge the two lists.
  let first = head;
  let second2 = prev;
  while (second2) {
    // console.log('final loop,', second2)
    let tmp1 = first.next;
    let tmp2 = second2.next;
    first.next = second2;
    second2.next = tmp1;
    first = tmp1;
    second2 = tmp2;
  }
};
