/**
 * @description Converts an array into a new array/object that returns everything omitted by the predicate
 * @param arr The array to be operated on
 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 * @param obj When true, the return type will be an object instead of an array
 *
 * @returns A new array/object that contains all values that don't satisfy the predicate
 */

export function omitBy<T>(arr: T[], predicate: (v: T, i: number, a?: T[]) => boolean, obj?: boolean): T[] | Object {
    const omitted = Object.keys(arr)
        .filter((key, i) => !predicate(arr[key], i, arr))
        .reduce((acc, key) => ((acc[key] = arr[key]), acc), obj ? {} : [])

    if (omitted instanceof Array) return omitted.filter(() => true)
    return omitted
}