function reversePrefixWord(word, ch) {
  let leftPointer = 0;
  let firstOccuranceWordIndex = firstOccurance(word, ch);
  let rightPointer = firstOccuranceWordIndex;
  console.log(firstOccuranceWordIndex);
  if (word.includes(ch)) {
    console.log("Found");
    let temp = word.split("");
    while (leftPointer <= rightPointer) {
      [temp[leftPointer], temp[rightPointer]] = [
        temp[rightPointer],
        temp[leftPointer],
      ];
      leftPointer = leftPointer + 1;
      rightPointer = rightPointer - 1;
    }
    console.log(temp.join(""));
    return temp.join("");
  } else {
    return word;
  }
  function firstOccurance(word, ch) {
    let arr = word.split("");
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] === ch) {
        return i;
      }
    }
  }
}
// First Occurance Utility Function
// function firstOccurance(word, ch) {
//   let arr = word.split("");
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === ch) {
//        return i

//     }
//   }
// }

reversePrefixWord("xyzzdhcgjriojrensj", "j");
