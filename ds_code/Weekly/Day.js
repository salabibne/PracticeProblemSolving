

const bookings =[
  {
    _id: {
      $oid: "673c2f0d54e04aeea628dae0",
    },
    sportsCategory: "Cricket",
    person: "24-96",
    date: "2024/11/21",
    time: "1:10 PM",
    place: "C",
    name: "emon provider",
    email: "emon@provider.com",
    pn: "01701474485",
    status: "VALID",
    transactionId: "20241119062413307249442",
    __v: 0,
  },
  {
    _id: {
      $oid: "673c2f5754e04aeea628dae5",
    },
    sportsCategory: "Football",
    person: "1-10",
    date: "2024/11/29",
    time: "9:30 PM",
    place: "A",
    name: "emon provider",
    email: "emon@provider.com",
    pn: "01701474485",
    status: "VALID",
    transactionId: "2024111906252705619082",
    __v: 0,
  },
  {
    _id: {
      $oid: "673c2f8c54e04aeea628daea",
    },
    sportsCategory: "Football",
    person: "1-10",
    date: "2024/11/30",
    time: "9:30 PM",
    place: "A",
    name: "salabibne",
    email: "dellvai@outlook.com",
    pn: "01701474332",
    status: "CANCELLED",
    transactionId: "2024111906262008915228",
    __v: 0,
  },
  {
    _id: {
      $oid: "673c303f54e04aeea628daef",
    },
    sportsCategory: "Football",
    person: "11-20",
    date: "2024/11/22",
    time: "9:30 PM",
    place: "A",
    name: "salabibne",
    email: "dellvai@outlook.com",
    pn: "01701474332",
    status: "Pending",
    transactionId: "20241119062919977115924",
    __v: 0,
  },
  {
    _id: {
      $oid: "673f765fd3afb987a1d4e17b",
    },
    sportsCategory: "Football",
    person: "1-10",
    date: "2024/11/23",
    time: "9:30 PM",
    place: "A",
    name: "salabibne",
    email: "dellvai@outlook.com",
    pn: "01701474332",
    status: "CANCELLED",
    transactionId: "2024112118051896711583",
    __v: 0,
  },
  {
    _id: {
      $oid: "673fcccd4571321e673c9ae9",
    },
    sportsCategory: "Cricket",
    person: "21-30",
    date: "2024/11/30",
    time: "1:10 PM",
    place: "B",
    name: "emon provider",
    email: "emon@provider.com",
    pn: "01701474485",
    status: "VALID",
    transactionId: "20241122001405215210140",
    __v: 0,
  },
  {
    _id: {
      $oid: "673fcde34571321e673c9af5",
    },
    sportsCategory: "Football",
    person: "11-20",
    date: "2024/11/30",
    time: "9:30 PM",
    place: "A",
    name: "ibne",
    email: "ibneawaleam@gmail.com",
    pn: "01518308249",
    status: "TERMINATED",
    transactionId: "20241122001843702112078",
    __v: 0,
  },
  {
    _id: {
      $oid: "6748028d22bbb7d33af5e923",
    },
    sportsCategory: "Football",
    person: "11-20",
    date: "2024/11/28",
    time: "9:30 PM",
    place: "A",
    name: "ibne",
    email: "ibneawaleam@gmail.com",
    pn: "01518308249",
    status: "TERMINATED",
    transactionId: "20241128054133756117552",
    __v: 0,
  },
];


const dayMap = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};





const today = new Date();
const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(today.getDate() - 6);

const weeklyBookings = bookings.reduce((acc, book) => {
  const bookingDate = new Date(book.date);

  // Filter for bookings within the last 7 days
  if (bookingDate >= sevenDaysAgo && bookingDate <= today) {
    const getDayOfNumber = bookingDate.getDay();
    const getDayName = dayMap[getDayOfNumber];
    const price = parseInt(book.person.split("-")[1]); 
    
    // Add earnings for the corresponding day of the week
    if (acc[getDayName]) {
      acc[getDayName] += 1;
      
    } else {
      acc[getDayName] = 1;
    }
  }

  return acc;
}, {});

const listWeeks =[weeklyBookings]
console.log(listWeeks);
// Convert to the desired array format
// value ={ Friday: 10, Saturday: 60, Thursday: 20 }

function convert(value) {
  let result = []
  for (let i = 0; i < value.length; i++) {
  for (const [k, v] of Object.entries(value[i])) {
    // let res = ` {day:${k}: booking : ${v}}`;
    let res = {
      day: k,
      bookings: v
    }
    result.push(res);
    
  }
  }
  console.log(result);
  
}

convert(listWeeks);
