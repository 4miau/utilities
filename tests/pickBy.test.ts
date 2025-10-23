import { pickBy } from '../src/lib/pickBy'

console.log(pickBy([1, 2, 3, 4, 5], (value) => value % 2 !== 0)) // [ 1, 3, 5 ]

console.log(pickBy([1, 2, 3], (value) => value > 2)) // [ 3 ]

console.log(pickBy([1, 2, 3], (value) => value < 0)) // []

console.log(pickBy([1, 2, 3, 4, 5], (value) => value % 2 === 0, true)) // { '1': 2, '3': 4 }