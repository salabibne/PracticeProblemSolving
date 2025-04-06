// first array to linkedlist
class DetectCycle {
  constructor(arr, pos) {
    this.head = null;
    this.tail = null;
    this.pos = pos;
    this.convertLinkedLst(arr);
  }

  convertLinkedLst(arr) {
    let nodes = [];
    for (let i = 0; i < arr.length; i++) {
      let node = {
        value: arr[i],
        next: null,
      };
      nodes.push(node);
      if (this.head == null) {
        this.head = node;
        this.tail = node;
      } else {
        // let lastElement=arr.length-1
        // if(i==lastElement){
        //     this.tail.next=this.head
        //     return
        // }
        this.tail.next = node;
        this.tail = node;
      }
    }

    if (this.tail != null) {
      // Way 1
      // this.tail.next = this.targetSpecificelement();

      // Way 2
      this.tail.next = nodes[this.pos];
    }

    // detect cycle
    let slow = this.head;
    let fast = this.head;
    let headPosition = this.head;
    let count = 0;
    while (arr.length > count) {
      if (
        slow === null ||
        slow.next === null ||
        fast === null ||
        fast.next === null ||
        fast.next.next === null
      ) {
        console.log("Iteration Completed ");
        return;
      }
      console.log(`count ${count}--slow ${slow.value}--fast ${fast.value}`);
      slow = slow.next;
      fast = fast.next.next;

      if (slow.value === fast.value) {
        // Cycle Detection Point 
        console.log("Loop Detected ");
        console.log(`count ${count}--slow ${slow.value}--fast ${fast.value}`);
        let headPosition = this.head;
        while (headPosition != slow) {
          // cycle detection occurs
          headPosition = headPosition.next;
          slow = slow.next;
          if (headPosition === slow) {
            let tempSlowPosition = slow;

            console.log(`Cycle detected at ${tempSlowPosition.value}`);
            break;
          }
        }
        break;
      }

      count = count + 1;
    }
  }

  // make a circulat at spefic node
  // targetSpecificelement() {
  //   let counterOfPos = 0;
  //   let currentN = this.head;
  //   while (true) {
  //     if (counterOfPos ===this.pos) {

  //       return currentN
  //     }
  //     currentN = currentN.next;
  //     counterOfPos++;
  //   }
  // }

  printLinkedLst() {
    let count = 0;
    let current = this.head;
    let result = [];
    while (count < 10 && current) {
      result.push(current.value);

      current = current.next;
      count = count + 1;
    }
    return result;
  }
}

let newarray = new DetectCycle([1, 2, 3, 4, 5], 2);

console.log(newarray.printLinkedLst());
// console.log(newarray.targetSpecificelement());
