class LinkedList{
  
   constructor(value) {
       let node = {
         value: value,
          next: null, 
          
      };
      
      this.head = node;
      this.tail = node 
      this.n=0
      
   }


   insert(value) {
       let new_node = {
         value: value,
         next: null,
      };
      this.tail.next = new_node
      this.tail = new_node
      this.n ++;
   }

   recursiveDisplay(node) {
      if(!node) return
      console.log(node.value);
      
      this.recursiveDisplay(node.next)
   }


   // Update the value using loop
   updateValue(pos, value) {
      let current = this.head
      if (pos <= 0) {
         console.log("This Update is not possible, pos can not be 0 or less");
         return
      }
      if (pos > this.n) {
         console.log("This update is not possible, pos can not be greater than n");
         return
      }
      for (let i = 0; i < this.n; i++){
         if (i == pos) {

            current.value = value
         }
         current= current.next
      }



   }

   // Update the value using the recursion 
   updateValueRecursive(node,pos, value,count =0) {
      if (pos <= 0) {
         return
         console.log("This Update is not possible, pos can not be 0 or less");
      }
      if (pos > this.n) {
         return
         console.log("This update is not possible, pos can not be greater than n");
      }
      
      if (!node) {
         console.log("Fail",node);
         return
      }
      console.log("node",node);
      
      if (count == pos) {
         node.value = value
         return 
         
      }
      this.updateValueRecursive(node.next,pos,value,count+1)


   }





}

let res = new LinkedList(100)
res.insert(200)
res.insert(300)
res.insert(400)

// res.recursiveDisplay(res.head)
// console.log("================");
// res.updateValue(2, 600)
// res.recursiveDisplay(res.head)

res.recursiveDisplay(res.head)
console.log("================");
res.updateValueRecursive(res.head,2, 600)
res.recursiveDisplay(res.head)
