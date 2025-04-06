function TestArray(arr) {
   for (let i = 0; i < arr.length; i++){
      // console.log(arr[i]);
       parsePersonPrice(arr[i])
   }
}




function parsePersonPrice(value) {
  const [person, price] = value.split("-");
  return `${person} person--${price} BDT `;
};


let result = TestArray(["21-30", "24-96", "18-94"]);
console.log(result);