// function RomanToInteger(s) {
//    let romanChat={
//       "I": 1,
//       "V": 5,
//       "X": 10,
//       "L": 50,
//       "C": 100,
//       "D": 500,
//       "M": 1000
//    }

//    let sum = 0;
//    for (i = 0; i <= s.length-1 ; i++){
//       if ((i + 1) <= s.length-1) {
//          console.log(i+1);
//          if (romanChat[s[i]] >= romanChat[s[i+1]]) {
//             // addition = romanChat[s[i]] + romanChat[s[i+1]]
//             console.log(s[i]);
//             console.log(s[i+1]);
//             addition = romanChat[s[i]]
//             console.log("addition",addition);
//             sum+=addition
//          }
//          else {
//             subtract = romanChat[s[i + 1]] - romanChat[s[i]]

//             sum+=subtract
//          }
//       }
     
//    }
//     return sum;
// }

// let result = RomanToInteger("III")
// console.log(result);


function RomanToInteger(s) {
   let romanChat = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
   }

   let sum = 0;
   for (let i = 0; i < s.length; i++) {
      // If the next Roman numeral is larger, it means we need to subtract the current one
      if (i < s.length - 1 && romanChat[s[i]] < romanChat[s[i + 1]]) {
         sum -= romanChat[s[i]];
      } else {
         // Otherwise, add the current numeral's value
         sum += romanChat[s[i]];
      }
   }
   return sum;
}

let result = RomanToInteger("LVIII"); // Example with "III"
console.log(result); // Output: 3
