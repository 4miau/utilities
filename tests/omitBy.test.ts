import { omitBy } from '../src/lib/omitBy'

console.log(omitBy([ 'a', 'b', 'c', 'd', null ], value => value === null)) // [ 'a', 'b', 'c', 'd' ]

console.log(omitBy([ 1, 2, 3, 4, 5, 6 ], value => value % 2 === 0)) // [ 1, 3, 5 ]

console.log(omitBy([ 'apple', 'banana', 'cherry', 'date' ], value => value.startsWith('b'))) // [ 'apple', 'cherry', 'date' ]

console.log(omitBy([{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }], value => value.a! % 2 === 1, true)) // { '1': { b: 2 }, '2': { c: 3 }, '3': { d: 4 }, '4': { e: 5 } }