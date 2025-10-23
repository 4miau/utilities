/**
 * @description Checks using a predicate if only one element matches the predicate, otherwise false
 * @param arr The array being operated on
 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 *
 * @returns True if only one element matches the predicate, otherwise false
 */

export function hasOnlyOne<T>(arr: T[], predicate: (v: T, i?: number, a?: T[]) => boolean): boolean {
    return arr.filter(predicate).length === 1
}