// This is not a working code its just a psudo code.


// suppose we have a file person.js
const person = {
  name: 'Suneel'
}
export default person

// suppose we have other file utility.js
export const clean = () => { ... }
export const baseData = 10;



// Now suppose we have app.js file and in that we want to use the code of above modules
import person from './person.js'
import prs from './person.js' // for default export you can keep any name person, prs etc
import baseData from './utility.js' // here you have to keep the exact name exported by module
import { baseData as bs} from './utility.js' // if you want to change the name you can use alias as
import clean from './utility.js'
import * as bundeled from './utility.js' // if you want import everything in that module you can use *
bundeled.baseData // you can use this way