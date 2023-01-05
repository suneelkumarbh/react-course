// Normal function
function printMyName(name){
  console.log(name)
}
printMyName('Suneel')


// Arrow function

const printMyNameArrowFunction = (name) => {
  console.log(name)
}
printMyNameArrowFunction('Suneel with arrow function')

// If argument is one you can write this way
const printMyNameArrowFunctionOneArgument = name => {
  console.log(name)
}
printMyNameArrowFunctionOneArgument('Suneel with arrow function and with once arguments')

// If no argument is passed
const printMyNameArrowFunctionNoArgument = () => {
  console.log('Suneel with arrow function and with no arguments')
}
printMyNameArrowFunctionNoArgument()

// If multiple arguments are passed
const printMyNameArrowFunctionMultipleArgument = (name, age) => {
  console.log(name, age)
}
printMyNameArrowFunctionMultipleArgument('Suneel', 27)

// If function returns anything then best practice is
// no need of brackates if one line is returned
const multiplyBy2 = (number) => number * 2
console.log(multiplyBy2(4))