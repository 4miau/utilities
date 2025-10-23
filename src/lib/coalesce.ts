/**
 * @description Iterates through the array and finds the first defined, non-null argument
 * @param arr The array being operated on
 *
 * @returns The first element that is defined and not-null
 */

export function coalesce<T>(arr: T[]): T {
    return arr.find((v: T) => ![undefined, null].includes(v) )
}