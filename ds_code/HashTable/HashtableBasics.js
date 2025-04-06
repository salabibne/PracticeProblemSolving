class HashMapForPerson{
   constructor() {
      this.map={}
   }

   setName(key, value) {
      this.map[key]=value
   }

   getName(key) {
      console.log(this.map[key]);
   }
}

let salab = new HashMapForPerson()
salab.setName("name","salab Ibne Awal Eam")
salab.setName("age","25y")
salab.setName("Institution", "Brac University")

// salab.getName("name")
console.log(salab);
