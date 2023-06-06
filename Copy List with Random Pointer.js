/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
class Node {
  constructor(val, next, random) {
    this.val = val ? val : null;
    this.next = next ? next : null;
    this.random = random ? random : null;
  }
}

var copyRandomList = function (head) {
  if (!head) return;
  //Step one is to make our infrastructure for the first while loop, the map for our random variables, and the head for our return linked list
  const map = new Map();
  let head2;
  let cur = head;
  let cur2 = null;
  while (cur) {
    //first make the new node
    const node = new Node(cur.val);
    if (cur2 === null) {
      cur2 = node;
      head2 = node;
    } else {
      cur2.next = node;
      cur2 = cur2.next;
    }
    //now to make the object,
    map.set(cur, cur2);
    cur = cur.next;
  }

  let redo = head2;
  let origi = head;

  //we now should out the randoms
  while (origi) {
    //   // console.log(origi.random)
    if (origi.random === null) {
      redo.random = null;
    } else {
      const rando = map.get(origi.random);
      redo.random = rando;
    }
    redo = redo.next;
    origi = origi.next;
  }
  return head2;
};

/*

Step 1. Unerstand the Problem

We are given a linked list as an input.

Our goal is to create a deep copy of the list.

This linked list will have both next values and random values though.
None of the pointers in the new list should point to nodes in the original.

Its just the nature of how object oriented programming works. We will need to make every node from scratch.


Step 2. Examples

Tricky to do examples here

Step 3. Method

I think a two pronged approach might work here.

Start by just focusing on establishing a linked list with val and next set correctly.

I'll need to make a new node every time.

Essentially I can loop through the original list normally

Every node I'll make a new node with the value

Now we'll need to keep the new linked list head stored somewhere to access it
We'll need a way to keep track of the values in that list as well, the new linked list needs to move forward and have its next values set.

I can use a cur for the original list
A copy var for the head of the new linked list
cur2 for the next node in the new list

so a while loop until we hit null
Make a new node with the cur value
cur2.next = new node
cur2=cur2.next
cur=cur.next

Now I want to keep track of the randoms as I do this but they need to be set to our new nodes

One idea is maybe just make an object. We can initialize the original linked list objects random pointers as keys. The values will be the new nodes we created.

Well okay I'm breaking this into two loops to keep it easier for me.

We initalize the object in the first loop, getting all the nodes random forms together. Then in the second loop we can search for the random nodes in the map, grab teh new values we created and set them in the random pointers.

Eventually we just return the head of the copied linked list.

*/
