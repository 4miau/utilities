import { coalesce } from '../src/lib/coalesce'

console.log(coalesce([undefined, null, 0, false, 'hello'])) // Output: 0

console.log(coalesce(['first', 'second', null, 'third'])) // Output: 'first'