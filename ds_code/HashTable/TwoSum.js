function twoSum(nums , target) {
  let hashArray=[]; 
 
 
  for (let i = 0; i < nums.length; i++) {
    let checkNum = target - nums[i];
    let elementInHashArray = hashArray.includes(checkNum);
    if (!elementInHashArray) {
      hashArray.push(nums[i]);
    } else {
      let a = hashArray.indexOf(checkNum)
      let b = i;
       console.log(a);
      console.log(b);
      return [a,b]
    }
  }
 
}

twoSum([2, 8, 11, 15],9);