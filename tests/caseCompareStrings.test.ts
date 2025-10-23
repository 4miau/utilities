import { caseCompareStrings } from '../src/lib/caseCompareStrings'

console.log(caseCompareStrings('Hello', 'hello', 'HELLO')) // true

console.log(caseCompareStrings('Apple', 'Banana', 'apple')) // false

console.log(caseCompareStrings('grape', 'Grape', 'GRAPE')) // true

console.log(caseCompareStrings('orange', 'cheese', 'blueberry')) // false