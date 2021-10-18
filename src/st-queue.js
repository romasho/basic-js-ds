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
module.exports = class Queue {

  constructor() {
    return this.queue  = null
  }

  getUnderlyingList() { 
    return this.queue 
  }

  enqueue(value) {
   

    if(!this.queue) {
      return (this.queue  = new ListNode(value))  // if !queue create new
    }

    let node  = this.queue      // if queue find last node
      while(node.next) {
        node = node.next
      }

      
      return (node.next = new ListNode(value))
  }

  dequeue() {
    if (!this.queue)  {
      return null
    }
     let node = this.queue.value   // safe value

     this.queue = this.queue.next  //change  first on second

     return node
  }

}
