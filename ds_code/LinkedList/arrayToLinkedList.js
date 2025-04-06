
class ArrayToLinkedList {
    constructor(arr){
        this.head = null
        this.tail=null
        this.oparation(arr)
    
    }

    oparation(arr){
        for(let i=0;i<arr.length;i++){
            let node ={
                value: arr[i],
                next: null
            }
            if(this.head==null){
                this.head = node
                this.tail = node
            }
            else{
                // let lastElement=arr.length-1
                // if(i==lastElement){
                //     this.tail.next=this.head
                //     return
                // }
                this.tail.next = node
                this.tail = node
            }
        }

        if(this.tail !=null){
            this.tail.next=this.head
        }

        
    }
}