function rotate(nums, k) {
   const n = nums.length;
   k=k%n
  reverse(nums, 0, n-1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n-1);


  function reverse(array, start, end) {
    while (start <= end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
    return array;
  }
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);
