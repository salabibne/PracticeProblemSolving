function middleNode(head){
    let arr = []
    let slowPointer=0
    let fastPointer=0
 

    while(fastPointer<head.length && fastPointer+1<head.length){
        slowPointer+=1
        fastPointer+=2
    }

    for(let i = slowPointer;i<head.length;i++){
        arr.push(head[i])
    }
    return arr
    
  
   
}

let res = middleNode([1,2,3,4,5,6])
console.log(res);
