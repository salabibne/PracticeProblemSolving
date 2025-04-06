function firstOccurance(word,ch) {
   let arr = word.split("")
   for (let i = 0; i <= arr.length - 1; i++){
      if (arr[i] === ch) {
         console.log(i);
         return i
     }
      
   }

   
}
firstOccurance("xyxzxe","z");

// let arr = ["a", "b", "c", "d", "e", "f", "d"];
// console.log(arr.includes("d")); // false
// console.log(arr.indexOf("d")); // false