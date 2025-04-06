class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedListWithCycle {
    constructor(arr, pos = -1) { // Default pos = -1 means no cycle
      this.head = null;
      this._buildListAndCreateCycle(arr, pos);
    }
  
    _buildListAndCreateCycle(arr, pos) {
      if (!arr || arr.length === 0) {
        this.head = null;
        return;
      }
  
      let nodes = []; // Store nodes temporarily to easily find the cycle node
      let currentTail = null;
  
      for (let i = 0; i < arr.length; i++) {
        const newNode = new Node(arr[i]);
        nodes.push(newNode);
  
        if (this.head === null) {
          this.head = newNode;
          currentTail = newNode;
        } else {
          currentTail.next = newNode;
          currentTail = newNode;
        }
      }
  
      // Create the cycle if pos is valid
      if (pos >= 0 && pos < arr.length && currentTail !== null) {
          console.log(`Creating cycle: Tail (${currentTail.value}) -> Node at index ${pos} (${nodes[pos].value})`);
        currentTail.next = nodes[pos]; // Point tail to the node at the specified position
      } else if (pos !== -1) {
          console.warn(`Invalid cycle position 'pos' (${pos}). No cycle created.`);
      } else {
           console.log("No cycle requested (pos = -1).");
      }
    }
  
    // Method to detect if a cycle exists using Floyd's Algorithm
    // Returns the meeting node if cycle exists, otherwise null
    detectCycleMeetingNode() {
      let slow = this.head;
      let fast = this.head;
  
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
  
        // Important: Compare nodes directly, not values
        if (slow === fast) {
          console.log(`Cycle detected! Meeting point: Node(${slow.value})`);
          return slow; // Cycle detected, return the meeting node
        }
      }
  
      console.log("No cycle detected.");
      return null; // No cycle found
    }
  
    // Method to find the starting node of the cycle
    // Returns the starting node if cycle exists, otherwise null
    findCycleStartNode() {
      const meetingNode = this.detectCycleMeetingNode();
      if (!meetingNode) {
        return null; // No cycle, so no start node
      }
  
      let ptr1 = this.head;
      let ptr2 = meetingNode;
  
      while (ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
      }
  
      console.log(`Cycle start node: Node(${ptr1.value})`);
      return ptr1; // ptr1 is now at the start of the cycle
    }
  
     // Method to calculate the length of the cycle
     // Returns the length if cycle exists, otherwise 0
     calculateCycleLength() {
          const meetingNode = this.detectCycleMeetingNode(); // Need a meeting point first
          if (!meetingNode) {
              return 0; // No cycle
          }
  
          let currentNode = meetingNode;
          let length = 0;
          do {
              currentNode = currentNode.next;
              length++;
          } while (currentNode !== meetingNode); // Loop until we return to the meeting node
  
          console.log(`Cycle length: ${length}`);
          return length;
     }
  
     // Improved print method with cycle handling (prints max nodes)
     printList(maxNodes = 20) {
       let current = this.head;
       let result = [];
       let count = 0;
       const visited = new Set(); // Keep track of visited nodes
  
       while (current && count < maxNodes) {
          if (visited.has(current)) {
              // Cycle detected during printing
              result.push(`...Cycle starts at Node(${current.value})...`);
              break;
          }
          visited.add(current);
          result.push(current.value);
          current = current.next;
          count++;
       }
       if (current && count >= maxNodes) {
          result.push("...(list truncated)...")
       } else if (!current) {
          result.push("null"); // Indicate end of list if no cycle truncated it
       }
  
       console.log("List:", result.join(" -> "));
       return result; // Return the array representation
     }
  }
  
  // --- Example Usage ---
  console.log("--- List with Cycle ---");
  let listWithCycle = new LinkedListWithCycle([1, 2, 3, 4, 5], 2); // Cycle: 5 -> 3
  listWithCycle.printList();
  let startNode = listWithCycle.findCycleStartNode(); // Will internally call detectCycleMeetingNode first
  listWithCycle.calculateCycleLength();
  
  
  console.log("\n--- List without Cycle ---");
  let listWithoutCycle = new LinkedListWithCycle([10, 20, 30, 40], -1); // No cycle
  listWithoutCycle.printList();
  listWithoutCycle.findCycleStartNode(); // Will report no cycle
  listWithoutCycle.calculateCycleLength(); // Will report 0
  
  console.log("\n--- Empty List ---");
  let emptyList = new LinkedListWithCycle([], 0);
  emptyList.printList();
  emptyList.findCycleStartNode();
  
  console.log("\n--- List with Invalid Cycle Pos ---");
  let invalidCycleList = new LinkedListWithCycle([7, 8, 9], 5); // pos 5 is out of bounds
  invalidCycleList.printList();
  invalidCycleList.findCycleStartNode(); // Will report no cycle