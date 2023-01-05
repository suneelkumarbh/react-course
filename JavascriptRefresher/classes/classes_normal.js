class Human {
  constructor(){
    this.gender = 'Male';
  }
  
  printGender(){
    console.log(this.gender)
  }
}

class Person extends Human {
  constructor(){
    super() // import to call super otherwise you will get error
    this.name = 'Suneel';
  }
  
  printName(){
    console.log(this.name)
  }
}

// const human = new Human();
// human.printGender()
const person = new Person()
person.printName()
person.printGender()