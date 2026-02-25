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

  reverse(){
    if(!this.head) return;

    let current = this.head;
    let prev = null;

    while(current){
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
     this.head = prev;
    
  }

  print(){
    if(!this.head) return;

    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }
  }
}


const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

 list.reverse();
list.print()

