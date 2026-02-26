class Node {
  constructor(value) {
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

  mergesort(head){
    if(!head || !head.next) return head;

    let slow = head;
    let fast = head;
let prev = null;
    while(fast&&fast.next){
      prev = slow
      slow = slow.next;
      fast = fast.next.next;
    }
prev.next = null
    let left = this.mergesort(head);
    let right = this.mergesort(slow);

return this.sort(left,right);
    }

    sort(left,right){

      let dummy = new Node(0);
      let current = dummy;

      while(left&&right){
        if(left.value<right.value){
          current.next = left;
          left = left.next;
        }else{
          current.next = right;
          right = right.next;
        }
        current = current.next;
      }

      current.next = left || right;
      return dummy.next;
    }
  print() {
    if (!this.head) return;

    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();

list.add(10);
list.add(30);
list.add(20);
list.add(50);
list.add(40);

list.head = list.mergesort(list.head);
list.print();
