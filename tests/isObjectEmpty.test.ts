import { isObjectEmpty } from '../src/lib/isObjectEmpty'

console.log(isObjectEmpty({})) // true

console.log(isObjectEmpty({ a: 1 })) // false

console.log(isObjectEmpty([])) // true