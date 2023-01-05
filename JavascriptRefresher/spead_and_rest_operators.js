// spread operator only merge the element
// syntax is three dots ...

const ary = [1, 2, 3]
const newAry = [ary, 4] 
console.log(newAry) // will print [[1,2,3], 4] because whole aray is merged not elements


// now use spread operator
const ary1 = [1, 2, 3]
const newAry1 = [...ary1, 4] 
console.log(newAry1) // will print [1,2,3, 4] because elements of aray is merged not elements


// can be used in objects as well
const person = {
  name: 'Suneel',
}
const newPerson = {
  ...person, 
  age: '27'
}
console.log(newPerson)








// Rest operator
const filter = (...args) => {
  return args.filter(el => el === 1)
}
console.log(filter(1,2,3,4))