import { chunk } from '../src/lib/chunk'

console.log(chunk([1, 2, 3, 4, 5], 2)) // [[1, 2], [3, 4], [5]]

console.log(chunk(['a', 'b', 'c', 'd'], 3)) // [['a', 'b', 'c'], ['d']]

console.log(chunk([true, false, true, false, true], 4)) // [[true, false, true, false], [true]]