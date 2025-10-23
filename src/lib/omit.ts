/**
 * @description Filters an object with all key-value pairs from a provided array omitted from the object
 * @param obj The object to operate on
 * @param arr An array of keys to find the key-value pairs to omit from the object
 *
 * @returns A new object with the omitted key-value pairs
 */

export function omit(obj: Object, arr: string[]): Object {
    return Object.keys(obj)
        .filter(key => !arr.includes(key))
        .reduce((acc, key) => ((acc[key] = obj[key]), acc), {})
}