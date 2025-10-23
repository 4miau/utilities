import { caseCompareString } from '../src/lib/caseCompareString'

console.log(caseCompareString('Hello', 'hello')) // true

console.log(caseCompareString('Apple', 'Banana')) // false

console.log(caseCompareString('grape', 'Grape')) // true

console.log(caseCompareString('orange', 'cheese')) // false