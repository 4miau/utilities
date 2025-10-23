import { omit } from '../src/lib/omit'

console.log(omit({ a: 1, b: 2, c: 3 }, ['b', 'c'])) // Expected output: { a: 1 }

console.log(omit({ name: 'Alice', age: 30, city: 'New York' }, ['age'])) // Expected output: { name: 'Alice', city: 'New York' }

console.log(omit({ x: 10, y: 20, z: 30 }, [])) // Expected output: { x: 10, y: 20, z: 30 }