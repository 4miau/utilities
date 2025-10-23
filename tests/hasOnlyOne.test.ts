import { hasOnlyOne } from '../src/lib/hasOnlyOne'

console.log(hasOnlyOne([1, 2, 3], (value) => value % 2 === 0)) // true

console.log(hasOnlyOne([1, 1, 2, 3, 4], (value) => value === 1)) // false