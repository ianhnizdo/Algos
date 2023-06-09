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

console.log(createList([1, 2, 3, 4]));

var reorderList4 = function (head) {
  const arr = [];
  let cur = head;
  while (cur !== null) {
    arr.push(cur);
    cur = cur.next;
  }
  let left = 0;
  let right = arr.length - 1;
  let condition = true;
  while (left < right) {
    if (condition) {
      arr[left].next = arr[right];
      left++;
      condition = false;
    } else {
      arr[right].next = arr[left];
      right--;
      condition = true;
    }
  }
  arr[left].next = null;
};

var reorderList = function (head) {
  const arr = [];

  let cur = head;

  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }

  let left = 0;
  let right = arr.length - 1;
  let leftSide = true;
  while (left < right) {
    console.log(left, right);
    if (leftSide) {
      arr[left].next = arr[right];
      left++;
      leftSide = false;
    } else {
      arr[right].next = arr[left];
      right--;
      leftSide = true;
    }
  }

  if (left === right) arr[right].next = null;

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
  while (f && f.next) {
    s = s.next;
    f = f.next.next;
  }

  let cur = s.next;
  s.next = null;
  let prev = null;
  while (cur) {
    let store = cur.next;
    cur.next = prev;
    prev = cur;
    if (!store) break;
    cur = store;
  }

  let pres = head;

  let edge = cur;
  // console.log(edge);
  let condition = true;
  while (edge && pres) {
    let storage;
    if (condition) {
      storage = pres.next;
      pres.next = edge;
      condition = false;
      pres = storage;
    } else {
      storage = edge.next;
      edge.next = pres;
      edge = storage;
      condition = true;
    }
  }
  // console.log(pres,edge)
  return head;
};

const list1 = createList([1, 2, 3, 4]);
const list2 = createList([1, 2, 3, 4, 5]);

const rearrange = reorderList3(list1);
// console.log(rearrange);
const r2 = reorderList3(list2);
// console.log(r2);
