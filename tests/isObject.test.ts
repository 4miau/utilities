import { isObject } from '../src/lib/isObject'

console.log(isObject({})) // true

console.log(isObject([])) // false

console.log(isObject(null)) // false

console.log(isObject(42)) // false

console.log(isObject('hello')) // false