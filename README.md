<div align="center">
<h1>Miau Utilities</h1>

**A collection of useful utilities for my various projects, constantly being expanded upon and improved.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![NPM Version](https://img.shields.io/npm/v/miau-utilities.svg)](https://www.npmjs.com/package/miau-utilities)
</div>


** Table of Contentes**

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Utilities](#utilities)
    - [arrayEmpty](#arrayempty)
    - [arrayRandom](#arrayrandom)
    - [capitalize](#capitalize)
    - [caseCompareString](#casecomparestring)
    - [caseCompareStrings](#casecomparestrings)
    - [chunk](#chunk)
    - [coalesce](#coalesce)
    - [getArrayDifferences](#getarraydifferences)
    - [getMethods](#getmethods)
    - [getTimeFromNow](#gettimefromnow)
    - [getType](#gettype)
    - [getURLParameters](#geturlparameters)
    - [hasMany](#hasmany)
    - [hasOnlyOne](#hasonlyone)
    - [inRange](#inrange)
    - [isAsyncFunc](#isasyncfunc)
    - [isFunc](#isfunc)
    - [isObject](#isobject)
    - [isObjectEmpty](#isobjectempty)
    - [isPrime](#isprime)
    - [mask](#mask)
    - [mostPerformant](#mostperformant)
    - [objectCompact](#objectcompact)
    - [omit](#omit)
    - [omitBy](#omitby)
    - [paginate](#paginate)
    - [pick](#pick)
    - [pickBy](#pickby)
    - [randomRange](#randomrange)
    - [retry](#retry)
    - [retrySync](#retrysync)
    - [takeUntil](#takeuntil)
    - [throttle](#throttle)
    - [timeTaken](#timetaken)
    - [wordWrap](#wordwrap)

## Description

This utilities package is a collection of various helper functions that I have personally designed and foudn useful across my own projects. The goal is to provide a centralized library of commonly used utilities that can be easily imported and utilized for day-to-day needs. Sometimes people create these and they tend to be under-optimized or not well maintained so I strive to keep improving and expanding this collection over time. Providing support for many types of projects and use-cases.

## Features

- Written in TypeScript for type safety and modern JavaScript features
- Fully tested
- Comprehensive documentation

## Installation

You can install the package via npm:

```sh
npm i miau-utilities
```

Or via yarn:

```sh
yarn add miau-utilities
```

## Usage

Each individual utility function can be imported from subpaths for example: @miau/utilities/arrayCompact or the entire library

```ts
import { arrayCompact, capitalize } from 'miau-utilities'

// or

import { isFunc } from 'miau-utilities/isFunc'
```

### Utilities

#### arrayEmpty

Returns whether the array is empty or not.

```ts
console.log(arrayEmpty([])) // true

console.log(arrayEmpty([1, 2, 3])) // false
```

#### arrayRandom

Returns a random array element.

```ts
console.log(arrayRandom([1, 2, 3, 4, 5])) // Example output: 3

console.log(arrayRandom(['a', 'b', 'c', 'd', 'e'])) // Example output: 'c'

console.log(arrayRandom([{ id: 1 }, { id: 2 }, { id: 3 }])) // Example output: { id: 2 }
```

#### capitalize

Capitalizes a string so that it will start with a capital letter.

```ts
console.log(capitalize('hello world')) // Hello world
```

#### caseCompareString

Checks if an argument string is the same despite the case it is in

```ts
console.log(caseCompareString('Hello', 'hello')) // true

console.log(caseCompareString('Apple', 'Banana')) // false

console.log(caseCompareString('grape', 'Grape')) // true

console.log(caseCompareString('orange', 'cheese')) // false
```

#### caseCompareStrings

Checks if all of the argument string(s) are the same despite the case it is in

```ts
console.log(caseCompareStrings('Hello', 'hello', 'HELLO')) // true

console.log(caseCompareStrings('Apple', 'Banana', 'apple')) // false

console.log(caseCompareStrings('grape', 'Grape', 'GRAPE')) // true

console.log(caseCompareStrings('orange', 'cheese', 'blueberry')) // false
```

#### chunk

```ts
Returns a new array that splits an array into multiple arrays of a fixed size

console.log(chunk([1, 2, 3, 4, 5], 2)) // [[1, 2], [3, 4], [5]]

console.log(chunk(['a', 'b', 'c', 'd'], 3)) // [['a', 'b', 'c'], ['d']]

console.log(chunk([true, false, true, false, true], 4)) // [[true, false, true, false], [true]]
```

#### coalesce

Iterates through the array and finds the first defined, non-null argument

```ts
console.log(coalesce([undefined, null, 0, false, 'hello'])) // Output: 0

console.log(coalesce(['first', 'second', null, 'third'])) // Output: 'first'
```

#### getArrayDifferences

Omits duplicate entries between both arrays and returns an mutated array with both values A & B for entries with differences

```ts
console.log(getArrayDifferences(['a', 'b', 'c'], ['a', 'b', 'd'])) // ['c', 'd']
```

#### getMethods

Takes in an object and returns all the methods and properties attached to that object's type

```ts
console.log(getMethods({}))

console.log(getMethods([]))
```

#### getTimeFromNow

Will retrieve a date representing the time at a point from now

```ts
console.log(getTimeFromNow(60000)) // 1 minute ago
```

#### getType

Gets the constructor type of a variable/object

```ts
console.log(getType(1)) // 'Number'

console.log(getType('string')) // 'String'

console.log(getType(true)) // 'Boolean'
```

#### getURLParameters

Returns a string array containing all the query parameters from a URL

```ts
console.log(getURLParameters('https://example.com?param1=value1&param2=value2')) // [ param1: 'value1', param2: 'value2' ]
```

#### hasMany

Checks using a predicate more than one element matches the predicate, otherwise false

```ts
console.log(hasMany([1, 2, 3], (value) => value % 2 === 0)) // false

console.log(hasMany([1, 1, 2, 3, 4], (value) => value === 1)) // true
```

#### hasOnlyOne

Checks using a predicate if only one element matches the predicate, otherwise false

```ts
console.log(hasOnlyOne([1, 2, 3], (value) => value % 2 === 0)) // true

console.log(hasOnlyOne([1, 1, 2, 3, 4], (value) => value === 1)) // false
```

#### inRange

Returns if the number is in the range of a minimum and max number

```ts
console.log(inRange(5, 1, 10)) // true

console.log(inRange(0, 1, 10)) // false
```

#### isAsyncFunc

Checks if the given object is an asynchronous function

```ts
console.log(isAsyncFunc(async () => {})) // true

console.log(isAsyncFunc(function () {})) // false
```

#### isFunc

Checks if the given object is a function

```ts
console.log(isFunc(async () => {})) // true

console.log(isFunc(function () {})) // true

console.log(isFunc(123)) // false
```

#### isObject

Checks if the given object is a plain object (excludes arrays)

```ts
console.log(isObject({})) // true

console.log(isObject([])) // false

console.log(isObject(null)) // false

console.log(isObject(42)) // false

console.log(isObject('hello')) // false
```

#### isObjectEmpty

Determines whether an object/array has no values or is empty

```ts
console.log(isObjectEmpty({})) // true

console.log(isObjectEmpty({ a: 1 })) // false

console.log(isObjectEmpty([])) // true
```

#### isPrime

Checks whether a provided number is a prime number or not

```ts
console.log(isPrime(7))  // true

console.log(isPrime(10)) // false

console.log(isPrime(13)) // true

console.log(isPrime(1))  // false
```

#### mask

Replaces the first `num` amount of characters with a provided mask to hide the inputted characters

```ts
console.log(mask('Hello World', 4, '*')) //****o World
```

#### mostPerformant

Will iterate through multiple functions and return an index of the highest performing function

```ts
console.log(
    mostPerformant([
        function test() {
            for (let i = 0; i < 10; i++) {
                console.log('HELLO!!!!')
            }
        },
        function test2() {
            console.log('HELLO!')
        }
    ], 2) // 1 / Promise { 1 }
)
```

#### objectCompact

Mutates an object to remove all falsy values.

```ts
console.log(objectCompact({ a: 1, b: null, c: 3 })) // { a: 1, c: 3 }

console.log(objectCompact({ a: 2, b: 'wow!', c: 3, d: '' })) // { a: 2, b: 'wow!', c: 3 }
```

#### omit

Filters an object with all key-value pairs from a provided array omitted from the object

```ts
console.log(omit({ a: 1, b: 2, c: 3 }, ['b', 'c'])) // Expected output: { a: 1 }

console.log(omit({ name: 'Alice', age: 30, city: 'New York' }, ['age'])) // Expected output: { name: 'Alice', city: 'New York' }

console.log(omit({ x: 10, y: 20, z: 30 }, [])) // Expected output: { x: 10, y: 20, z: 30 }
```

#### omitBy

Converts an array into a new array/object that returns everything omitted by the predicate

```ts
console.log(omitBy([ 'a', 'b', 'c', 'd', null ], value => value === null)) // [ 'a', 'b', 'c', 'd' ]

console.log(omitBy([ 1, 2, 3, 4, 5, 6 ], value => value % 2 === 0)) // [ 1, 3, 5 ]

console.log(omitBy([ 'apple', 'banana', 'cherry', 'date' ], value => value.startsWith('b'))) // [ 'apple', 'cherry', 'date' ]

console.log(omitBy([{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }], value => value.a! % 2 === 1, true)) // { '1': { b: 2 }, '2': { c: 3 }, '3': { d: 4 }, '4': { e: 5 } }
```

#### paginate

Cuts an array into pages and returns both data of an inputted page and the max pages it accepts.

```ts
console.log(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 2)) // [ [5, 6], 5]
```

#### pick

Filters an object and only picks the key-value pairs from a provided array

```ts
console.log(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])) // { a: 1, c: 3 }

console.log(pick({ a: 1, b: 2, c: 3 }, ['b'])) // { b: 2 }

console.log(pick({ a: 1, b: 2, c: 3 }, ['d'])) // {}
```

#### pickBy

Converts an array into a new array/object that returns everything picked by the predicate

```ts
console.log(pickBy([1, 2, 3, 4, 5], (value) => value % 2 !== 0)) // [ 1, 3, 5 ]

console.log(pickBy([1, 2, 3], (value) => value > 2)) // [ 3 ]

console.log(pickBy([1, 2, 3], (value) => value < 0)) // []

console.log(pickBy([1, 2, 3, 4, 5], (value) => value % 2 === 0, true)) // { '1': 2, '3': 4 }
```

#### randomRange

Retrieves a random number between 2 provided numbers

```ts
console.log(randomRange(1, 10)) // Example output: 7

console.log(randomRange(-5, 5)) // Example output: 1

console.log(randomRange(0, 1)) // Example output: 0

console.log(randomRange(100, 200)) // Example output: 150
```

#### retry

Retries an async function a specified number of times before throwing the last error encountered.

```ts
retry(async () => {
  if (Math.random() < 0.7) {
    throw new Error('Failed attempt')
  }
  return 'Success'
}, 5).then(res => console.log(res)) // Example output: 'Success' or throws an error after 5 failed attempts
```

#### retrySync

Retries a synchronous function a specified number of times before throwing the last error encountered.

```ts
console.log(retrySync(() => {
    if (Math.random() < 0.7) {
        throw new Error('Failed attempt')
    }
    return 'Success'
}, 5)) // Example output: 'Success' or throws an error after 5 failed attempts
```

#### takeUntil

Takes values from an array until the predicate returns true

```ts
console.log(takeUntil([1, 2, 3, 4, 5], (value) => value === 3)) // [1, 2]
```

#### throttle

Creates a throttled function that only invokes `func` at most once every `wait` milliseconds.

```ts
const throttled = throttle(() => { console.log('throttled') }, 5000)

throttled() // will log 'throttled'

throttled() // will NOT log anything

throttled() // will NOT log anything

setTimeout(() => { throttled() }, 5000)

throttled.flush() // will reset the throttle timer immediately

throttled() // will log 'throttled'
```

#### timeTaken

Retrieves the time taken to run a function

```ts
console.log(timeTaken(() => { console.log('Hello World!')})) // Example Output: "0.4937999999999647"
```

#### wordWrap

Produces a new string where there is a new line escape character after every `max` characters

```ts
console.log(wordWrap('Hello World!', 10)) // Expected Output: "Hello\nWorld!"

console.log(wordWrap('This is a test string for word wrapping.', 8)) // Expected Output: "This is\na test\nstring\nfor word\nwrapping."

console.log(wordWrap('Short', 10)) // Expected Output: "Short"

console.log(wordWrap('A verylongwordthatneedstobewrapped', 5, '\n'))
```