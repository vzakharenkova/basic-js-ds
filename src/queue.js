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
    this.values = {};
    this.first = 0;
    this.last = 0;
  }

  getUnderlyingList() {
    
}
    

  enqueue(value) {
    this.values[this.last] = value;
    this.last++;
  }

  dequeue() {
    let item = this.values[this.first];
    delete this.values[this.first];
    this.first++;
    return item;
  }
}

module.exports = {
  Queue
};
