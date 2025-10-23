/**
 * @description Filters an object and only picks the key-value pairs from a provided array
 * @param obj The object being operated on
 * @param arr The keys to find the key-value pairs to pick from the object
 *
 * @returns A new object with the picked key-value pairs
 */

export function pick(obj: Object, arr: string[]): Object {
    return arr.reduce((acc, val) => (val in obj && (acc[val] = obj[val]), acc), {})
}