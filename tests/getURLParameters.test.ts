import { getURLParameters } from '../src/lib/getURLParameters'

console.log(getURLParameters('https://example.com?param1=value1&param2=value2')) // [ param1: 'value1', param2: 'value2' ]