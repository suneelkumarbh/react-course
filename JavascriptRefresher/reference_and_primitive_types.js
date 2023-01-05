// will copy the values
let number = 1;
let numbercopy = number;
number = 2;
console.log(numbercopy);


// in objects and array cases will copy the pointer
let person = {
  name: 'Sunee'
}
let personcopy = person
console.log(personcopy)
person.name = 'Updated'
console.log(personcopy)


// if you want to copy properties and values then use spread operator
let person = {
  name: 'Sunee'
}
let personcopy = {...person}
console.log(personcopy)
person.name = 'Updated'
console.log(personcopy)



// In short objects and arrays are reference types