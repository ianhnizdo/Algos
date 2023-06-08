/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
//number must be an array;
function makeList(number) {
  if (!Array.isArray(number)) return "invalid input";
  let head = null;
  let list = null;
  for (let i = 0; i < number.length; i++) {
    const cur = number[i];
    const node = new ListNode(cur);
    if (list === null) {
      head = node;
      list = node;
    } else {
      list.next = node;
      list = list.next;
    }
  }
  return head;
}

var addTwoNumbers = function (l1, l2) {
  let answer;
  let head;
  let c1 = l1;
  let c2 = l2;
  let carry = 0;

  //Continue looping as long as they exist
  while (c1 || c2) {
    const num1 = c1 ? c1.val : 0;
    const num2 = c2 ? c2.val : 0;
    let sum = num1 + num2 + carry;
    console.log(num1, num2, sum);
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
      //   console.log(sum)
    } else {
      carry = 0;
    }

    let node = new ListNode(sum);
    if (answer === undefined) {
      answer = node;
      head = node;
    } else {
      answer.next = node;
      answer = answer.next;
    }

    c1 = c1 ? c1.next : null;
    c2 = c2 ? c2.next : null;
  }

  if (carry === 1) {
    const node = new ListNode(carry);
    answer.next = node;
  }
  return head;
};

const num1 = makeList([2, 4, 3]);
const num2 = makeList([5, 6, 4]);
const numSum = addTwoNumbers(num1, num2);
console.log(numSum);

var addTwoNumbers2 = function (l1, l2) {
  const arr = [];

  let node1 = l1;
  let node2 = l2;
  let bool = false;
  while (node1 !== null || node2 !== null || bool) {
    let sum = 0;
    if (node1 && node2) {
      sum = node1.val + node2.val;
      node1 = node1.next;
      node2 = node2.next;
    } else if (node1 || node2) {
      sum = node1 === null ? node2.val : node1.val;
      if (node1 === null && node2 !== null) node2 = node2.next;
      if (node2 === null && node1 !== null) node1 = node1.next;
    }
    if (bool) {
      sum += 1;
      // console.log('bool,', sum)
      bool = false;
    }

    if (sum > 9) {
      bool = true;
      sum = Math.floor(sum % 10);
    }
    // console.log(bool, sum)
    const node = new ListNode(sum);
    // console.log('test');
    arr.push(node);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === undefined) {
      arr[i].next = null;
      break;
    }
    arr[i].next = arr[i + 1];
  }

  return arr[0];
};

var addTwoNumbers3 = function (l1, l2, carry = 0) {
  let sentinel = (tail = new ListNode());

  while (l1 || l2 || carry) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    const node = new ListNodoe(sum);

    tail.next = node;
    tail = tail.next;

    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  return sentinel.next;
};
