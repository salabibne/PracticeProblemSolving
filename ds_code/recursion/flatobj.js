function flatJs(obj,result={}) {
   for (let i in obj) {
      // console.log(i);
      // console.log(typeof(i));
      if (obj.hasOwnProperty(i)) {
         // console.log("ns", i);
         if (typeof (obj[i]) === "object") {
            console.log("Nested Object",obj[i]);
           flatJs(obj[i],result)
         }
         else {
            result[i]=obj[i]
         }
      }

   //   console.log(result);
   }
   return result
   // console.log("Result",result);
}

const nestedObj = {
  
  "sportsAndPerson": {
    "sportsCategory": "Cricket",
    "person": "14",
    
  },
  "dateAndtime": {
    "date": {
      "$date": "2024-10-30T18:00:00.000Z"
    },
    "time": "122p",
    "place": "Roof",
   
  },
  "personalInformation": {
    "name": "salabibne",
    "email": "dellvai@outlook.com",
    "pn": "01701474332",
   
  },

}


let result = flatJs(nestedObj);
console.log("Result",result);
