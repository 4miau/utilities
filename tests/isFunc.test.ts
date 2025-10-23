import { isFunc } from '../src/lib/isFunc'

console.log(isFunc(async () => {})) // true

console.log(isFunc(function () {})) // true

console.log(isFunc(123)) // false