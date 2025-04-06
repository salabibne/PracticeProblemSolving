// Here tree is BST (Binary Search Tree) and we are inserting the value in the tree.

class BST{
    constructor(value){
        let node ={
            value:value,
            left:null,
            right:null
        }

        this.root = node;
    }

    // insert a value 

    insert(value){
        let newNode ={
            value:value,
            left:null,
            right:null
        }

        let current = this.root;

        while(true){
            if(value<current.value){
                // move the left 
                if(current.left==null){
                    current.left = newNode;
                    break
                }
                current = current.left
            }
            else{
                // move the right 
                if(current.right==null){
                    current.right = newNode;
                    break
                }
                current = current.right
            }
        }
    }

    // BFS Using Queue
    BFS(){
       
        let queue = []

        queue.push(this.root);

        while(queue.length){
            // console.log(queue);
            console.log(queue[0].value)
            let current= queue[0]

            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
            queue.shift()   // remove the first element from the queue
        }
    }


}

let tree = new BST(10);
tree.insert(5);
tree.insert(15);
tree.insert(8);
tree.insert(3);
tree.insert(20);
tree.insert(25);
tree.insert(13);
// console.log(tree);
// console.log(JSON.stringify(tree, null, 2));

tree.BFS();
// JSON.stringify() is a JavaScript method that converts a JavaScript object or value into a JSON string. 
// he second argument to JSON.stringify() is a replacer function or an array of keys. If it's null (as in your code), it means all properties of the object should be included in the stringification. You're not filtering or modifying the object's properties during the conversion.
// 2: The third argument is a space argument. It controls the indentation of the output JSON string. If it's a number (like 2), it represents the number of space characters to use for indentation at each level. If it's a string (like " "), that string is used for indentation. Using 2 makes the JSON output more readable by adding indentation.