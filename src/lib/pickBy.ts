/**
 * @description  Takes in an array and produces a new array/object that returns everything satisfying the predicate
 * @param arr The array being operated on
 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 * @param obj When true, the return type will be an object instead of an array
 *
 * @returns A new object/array that contains all values that satisfy the predicate
 */

export function pickBy<T>(arr: T[], predicate: (v: T, i: number, a?: T[]) => boolean, obj?: boolean): T[] | Object {
    const picked = Object.keys(arr)
        .filter((key, i) => predicate(arr[key], i, arr))
        .reduce((acc, key) => ((acc[key] = arr[key]), acc), obj ? {} : [])

    if (picked instanceof Array) return picked.filter(() => true)
    return picked

}