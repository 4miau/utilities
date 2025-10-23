/**
 * @description Takes values from an array until the predicate returns true
 * @param arr The array to take values from
 * @param predicate The predicate function to evaluate each value
 *
 * @returns A new array containing the taken values
 */

export function takeUntil<T>(arr: T[], predicate: (value: T) => boolean): T[] {
    for (const [i, val] of arr.entries()) {
        if (predicate(val)) return arr.slice(0, i)
    }
}