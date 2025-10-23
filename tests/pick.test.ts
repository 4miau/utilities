import { pick } from '../src/lib/pick'

console.log(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])) // { a: 1, c: 3 }

console.log(pick({ a: 1, b: 2, c: 3 }, ['b'])) // { b: 2 }

console.log(pick({ a: 1, b: 2, c: 3 }, ['d'])) // {}