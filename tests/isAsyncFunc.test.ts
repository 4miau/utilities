import { isAsyncFunc } from '../src/lib/isAsyncFunc'

console.log(isAsyncFunc(async () => {})) // true

console.log(isAsyncFunc(function () {})) // false