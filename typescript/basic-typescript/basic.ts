// Primitive: number, string, boolean
// More complex: arrys, objects
// Function types, parameters

// Primitives
let age: number = 10

age = 12.9

let userName: string = ""
userName = "suneel"

let isValid: boolean
isValid = false;

// more complex

let hobbies: string[]; // array of strings
hobbies = ['a', 'b']

let person: {
  name: string,
  age: number
}

person = {
  name: 'suneel',
  age: 12
}

// array of objects
let people: {
  name: string,
  age: number
}[]

// two types of one variable
let course: string | number = "this is react course"
course = 12345

// alis

type Person = {
  name: string,
  age: number
}

let person1: Person

// functions and types
function add(a: number, b: number): number {
  return a + b
}

function print(a: any) {
  console.log();
}


// generics

function insertIntoBegining<T>(array: T[], value: T) {
  const updatedArray = [value, ...array]
  return updatedArray
}

const updatedArray = insertIntoBegining([1, 2, 3], 4)
//updatedArray[0].split('')