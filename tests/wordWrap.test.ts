import { wordWrap } from '../src/lib/wordWrap'

console.log(wordWrap('Hello World!', 10)) // Expected Output: "Hello\nWorld!"

console.log(wordWrap('This is a test string for word wrapping.', 8)) // Expected Output: "This is\na test\nstring\nfor word\nwrapping."

console.log(wordWrap('Short', 10)) // Expected Output: "Short"

console.log(wordWrap('A verylongwordthatneedstobewrapped', 5, '\n'))