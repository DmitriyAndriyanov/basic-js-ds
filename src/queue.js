const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let currentNode = this.head;

    while(currentNode) {
      return currentNode;

      if (currentNode.next) {
        currentNode = currentNode.next;
      }
    }
  }

  enqueue(value) {
    const listNode = new ListNode(value);

    if (this.head) {
      this.tail.next = listNode;
      this.tail = listNode;
    } else {
      this.head = listNode;
      this.tail = listNode;
    }

    this.length++;
  }

  dequeue() {
    const currentNode = this.head;
    this.head = this.head.next;
    this.length--;

    return currentNode.value;
  }
}

module.exports = {
  Queue
};

const queue = new Queue();
