

// implement a binary search tree

// Node {

//     Value : 10,
//     Left : null,
//     Right: null
    
    
//     }

// Small Data ==> Left 
// Big Data ==> Right 


class BST{
    constructor(value){
        let node = {
            value: value,
            left: null,
            right: null
        }
 // declare the root 
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
                current=current.left

            }

            else{
                // move the right 
                if(current.right==null){
                    current.right = newNode;
                    break
                }
                current=current.right

            }   
        }
    }


    // search the function
    // this is kind of binary search , per level we are reducing the search space by half
    search(value){
        let current = this.root;
        while(true){
            

            if(current.value==value){
                console.log("Value Found");
                return true;
            }
            else if(value<current.value){
                // move the left 
                if(current.left==null){
                    return false
                }
                current=current.left

            }

            else{
                // move the right 
                if(current.right==null){
                    return false
                }
                current=current.right

            }
        }
    }

    // Recursive Search

    searchRecursive(value,current=this.root){
        if(current==null){
            return "Not Found ";
        }
        if(current.value==value){
            return "Found";
        }
        if(value<current.value){
            return this.searchRecursive(value,current.left);
        }
        else{
            return this.searchRecursive(value,current.right);
        }
    }





    
}

const bst = new BST(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(20);
bst.insert(25);
bst.insert(13);
bst.search(13);
console.log(JSON.stringify(bst, null, 2));
console.log(bst.searchRecursive(100));

// JSON.stringify() is a JavaScript method that converts a JavaScript object or value into a JSON string. 
// he second argument to JSON.stringify() is a replacer function or an array of keys. If it's null (as in your code), it means all properties of the object should be included in the stringification. You're not filtering or modifying the object's properties during the conversion.
// 2: The third argument is a space argument. It controls the indentation of the output JSON string. If it's a number (like 2), it represents the number of space characters to use for indentation at each level. If it's a string (like " "), that string is used for indentation. Using 2 makes the JSON output more readable by adding indentation.