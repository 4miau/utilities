import { hasMany } from '../src/lib/hasMany'

console.log(hasMany([1, 2, 3], (value) => value % 2 === 0)) // false

console.log(hasMany([1, 1, 2, 3, 4], (value) => value === 1)) // true