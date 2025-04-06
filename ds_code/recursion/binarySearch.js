function binarySearch(arr, i, j, target) {
   if (i > j) {
      return false
   }

   let mid = Math.floor((i + j) / 2)
   if (arr[mid] === target) { 
      return true
   }
   
   if (target < arr[mid]) {
      return binarySearch(arr, i, mid - 1, target)
   }
   else {
      return binarySearch(arr, mid + 1, j, target)
   }

}

console.log(binarySearch([10,20,30,40],0,3,31));