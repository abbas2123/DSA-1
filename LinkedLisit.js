class Node {
constructor(value){
this.value = value;
this.next = null;
}
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  count() {
    let count = 0;

    if (!this.head) return count;
    let current = this.head;

    while (current) {
      current = current.next;
      count++;
    }

    return count;
  }

  findMidle() {
    if (!this.head) return;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }

  reverse() {
    if (!this.head) return;

    let current = this.head;
    let prev = null;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  print() {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  detect() {
    if (!this.head) return;

    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  removeNthFromEnd(n) {
    if(!this.head) return;
    let dummy = { next: this.head };
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
      fast = fast.next;
    }

    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;

    this.head = dummy.next;
  }

  removeNth(n){

    let count = 1;
 let current = this.head;
 let prev = null;
    while(n!==count&&current){
      prev = current;
      current = current.next;
      count++
    }
    prev.next = current.next;

  }

  deleteen
}


const list = new LinkedList();


list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
// list.removeNthFromEnd(4);
list.removeNth(2);
list.print()
