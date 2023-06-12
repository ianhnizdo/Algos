/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.size = capacity;

    this.head = {};
    this.tail = {};

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  put(key, val) {
    const present = this.map.has(key);
    if (present) {
      const value = this.map.get(key);
      value.val = val;
      this.update(value);
      return;
    }
    if (this.map.size == this.size) {
      const least = this.head.next;
      console.log("max size", key, least.key);
      //max capacity reached
      this.cutDown();
      this.map.delete(least.key);
    }

    const node = { key: key, val: val };
    this.recent(node);

    this.map.set(key, node);
  }

  recent(node) {
    this.tail.prev.next = node;
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev = node;
  }

  update(node) {
    // node.val = val;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.recent(node);
  }

  cutDown() {
    const [head, leastUsed, almostleastUsed] = [
      this.head,
      this.head.next,
      this.head.next.next,
    ];
    head.next = almostleastUsed;
    almostleastUsed.prev = head;
  }

  get(key) {
    const present = this.map.has(key);

    if (!present) return -1;

    const node = this.map.get(key);
    this.update(node);

    return node.val;
  }
}

const test = new LRUCache(3);
console.log(test.map);

test.put("4", 4);
console.log(test);
console.log(test.get("4"));
test.put("3", 1);
test.put("2", 2);
test.put("5", 5);
console.log(test.get("4"));
console.log(test.get("5"));
test.get("3");
test.put("8", 8);
console.log(test.get("2"));
