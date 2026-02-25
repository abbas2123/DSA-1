console.log('file is running');

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
  print(){
    if(!this.head) return;

    let current = this.head;
    while(current){
      console.log(current.value)
      current = current.next;
    }
  }

  isPalindrom(){
    if(!this.head) return;

    let fast = this.head;
    let slow = this.head;

    while(fast&&fast.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    
    let current = slow;
    let prev = null
    while(current){
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    let first = this.head;
    let second = prev;

    while(second){
      if(first.value!==second.value){
        return false;
      }
      first = first.next;
      second = second.next;
    }

    return true;
  }
}



const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(20);
list.add(10);
console.log(list.isPalindrom());
