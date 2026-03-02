class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyList {
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
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  print(){
    if(!this.head) return;

    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next
    }
  }
  reverse(){
    let current = this.head;
    let prev = null;

    while(current){
      prev = current.prev;
      current.prev = current.next
      current.next = prev;
      
      current = current.prev;

    }

    if(prev){ 
      this.tail = this.head, 
      this.head = prev.prev};
  }
  delete(value){
   if(!this.head) return null;

   let current = this.head;

   while(current){
    if(current.value===value){

      if(current===this.head){
        this.head = current.next;
        if(this.head) this.head.prev = null;
        return
      }

      if(current === this.tail){
        this.tail = current.prev;
        this.tail.next = null;
        return
      }

      current.prev.next = current.next;
      current.next.prev = current.prev
      return;
    }
    current = current.next;
   }
 console.log('value not found');
  }
}

const list = new DoublyList();

list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
list.reverse();

list.print();