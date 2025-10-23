import { takeUntil } from '../src/lib/takeUntil'

console.log(takeUntil([1, 2, 3, 4, 5], (value) => value === 3)) // [1, 2]