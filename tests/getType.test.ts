import { getType } from '../src/lib/getType'

console.log(getType(1)) // 'Number'

console.log(getType('string')) // 'String'

console.log(getType(true)) // 'Boolean'