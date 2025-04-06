function factorialCal(n) {
   if (n == 0) {
      return 1
   }

   return n*factorialCal(n-1)
}

console.log(factorialCal(5));