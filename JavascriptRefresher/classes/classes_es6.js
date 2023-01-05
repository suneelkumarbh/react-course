class Human {
  gender = 'Male';
  
  
  printGender = () => {
    console.log(this.gender)
  }
}

class Person extends Human {
  name = 'Suneel';
  
  printName = () => {
    console.log(this.name)
  }
}

// const human = new Human();
// human.printGender()
const person = new Person()
person.printName()
person.printGender()