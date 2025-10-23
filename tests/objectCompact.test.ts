import { objectCompact } from '../src/lib/objectCompact'

console.log(objectCompact({ a: 1, b: null, c: 3 })) // { a: 1, c: 3 }

console.log(objectCompact({ a: 2, b: 'wow!', c: 3, d: '' })) // { a: 2, b: 'wow!', c: 3 }