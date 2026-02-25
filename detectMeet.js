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

  createCycle(value) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.value === value) {
        this.tail.next = current;
        return;
      }
      current = current.next;
    }

    console.log("Value not found");
  }

  findcycle(){
    if(!this.head) return;

    let fast = this.head;
    let slow = this.head;

    while(fast&&fast.next){
      slow = slow.next;
      fast = fast.next.next;

      if(slow===fast){
        break;
      }
    }

    slow = this.head;

    while(slow!==fast){
      slow = slow.next;
      fast = fast.next;
    }

    return console.log(fast);
  }
}

const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(20);
list.add(10);

list.createCycle(20);

list.findcycle()