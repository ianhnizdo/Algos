class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getMin() {
    return this.heap[1];
  }

  getMax() {
    return this.heap[this.heap.length - 1];
  }

  insert(num) {
    // const node = new Node(num);
    this.heap.push(num);

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  remove() {}
}
//Goal is to make a heap that is sorted in a sense
const arr = [32, 23, 36, 38, 10, 45, 57];
const heap = new MaxHeap();
heap.insert(10);
heap.insert(23);
heap.insert(20);
heap.insert(36);
heap.insert(18);
// heap.insert(5);
console.log(heap);
console.log("yo");
/*

inserting O(logn)
access min/max O(1)
Removing the element O(logn)

tree, every level except the last is completely filled and all nodes are as far left as possible

We like heaps to get the minimum and maximum value present in O(1) time.
Linked lists are in O(n) time, binary search tree (logn) time
n bineg the number of elements

We use heaps to access high level elements fast as possible. Priority Queue

1. Operating System
2. Blocking Priority Queue
3. Order Statistics (kth-smallest/kth-largest), HeapSort Algorith, Graph Algorithms

How to implement Heaps?

parent=i*2+1
leftchild=i*2+2

Difficulties

Getting the min and max is simple

Problem
1. How to insert into the heap and make it sort out
2. How to establish relationships between the nodes, how do we figure out the children vs the parents
We could just make use of an array and use the indexes to find out where things are


Solution
Parent left child
i*2+1
Parent Right child
i*2+2

What is the parent of this number

if i is even
(i-2)/2

if i is odd
(i-1)/2

Maybe all we need to do is just see if that number exists. If its less than our input we're square

Now all we need to do is just make a loop to swap number until we find a properly sorted heap
*/
