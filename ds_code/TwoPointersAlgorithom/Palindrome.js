function isPalindrome(s) {
  let processStr = processString(s);
  console.log(processStr);
  let start = 0;
  let end;
  if (processStr == "") {
      end = processStr.length;
  }
  else {
    end = processStr.length - 1;
  }


  let decision = false;
  while (start <= end) {
    if (processStr[start] == processStr[end]) {
      
      decision = true;
      start++;
      end--;
      
    } else {
      decision = false;
      break;
    }
   }
   console.log("des",decision);
  return decision;

  function processString(str) {
    let removingSpace = str
      .split(/[^a-zA-Z0-9]+/)
      .join("")
      .toLowerCase();
    return removingSpace;
  }
}

let result = isPalindrome(".");
console.log(result);
