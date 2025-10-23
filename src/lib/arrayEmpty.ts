/**
 * @description Returns whether the array is empty or not.
 * @param arr The array.
 *
 * @returns True if the array is empty, otherwise false
 */

export function arrayEmpty<T>(arr: T[]): boolean {
    return (!arr || !arr.length)
}