import { arrayRandom } from '../src/lib/arrayRandom'

console.log(arrayRandom([1, 2, 3, 4, 5])) // Example output: 3

console.log(arrayRandom(['a', 'b', 'c', 'd', 'e'])) // Example output: 'c'

console.log(arrayRandom([{ id: 1 }, { id: 2 }, { id: 3 }])) // Example output: { id: 2 }